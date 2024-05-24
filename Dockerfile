# Base image
FROM node:18-alpine AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY pnpm-lock*.yml ./

# Install app dependencies
RUN npm install pnpm -g

RUN pnpm install

# Bundle app source
COPY . .

# ENV AND ARGS
ARG DB_HOST
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_DATABASE
ARG DB_PORT
ARG PORT


ENV NODE_ENV=production
ENV DB_HOST $DB_HOST
ENV DB_USERNAME $DB_USERNAME
ENV DB_PASSWORD $DB_PASSWORD
ENV DB_DATABASE $DB_DATABASE
ENV DB_PORT $DB_PORT
ENV PORT $PORT


# Creates a "dist" folder with the production build
RUN npm run build

# Run the app
FROM node:18-alpine AS production
WORKDIR /home/node/app
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/package*.json ./
COPY --from=build /home/node/app/node_modules ./node_modules
# COPY public /home/node/app/public
# RUN npm install -g pnpm
# RUN pnpm install --prod
RUN npm install -g pm2 --ignore-scripts



EXPOSE $PORT
# Start the server using the production build
CMD ["pm2-runtime", "dist/src/main.js"]