# Initial Description

The project is initially exemplified by the implementation of a CRUD (Create, Read, Update, Delete) for a TODO. This functionality serves as a basis to demonstrate the architecture and development practices used, facilitating the understanding and extension of the code for other use cases and domains.

## DDD & SOA Architecture

This project implements a layered and service-oriented architecture, following the principles of Domain-Driven Design (DDD) and Service-Oriented Architecture (SOA). The code structure facilitates scalability, maintenance, and reusability, with a clear separation of responsibilities into application, domain, infrastructure, and presentation layers. Concise description of the project.

## Project Structure

The project is organized following a modular and service-based architecture, which facilitates code scalability and maintenance. The file and folder structure is detailed below:

### Configuration Files

- `docker-compose.yml`: Docker configuration file.
- `Dockerfile`: File used to build the Docker image.
- `jest.config.js`: Jest configuration file for testing.
- `nest-cli.json`: NestJS CLI configuration file.
- `package.json`, `pnpm-lock.yaml`: Dependency management files.
- `tsconfig.json`, `tsconfig.build.json`: TypeScript configuration files for development and production.
- `README.md`: Project documentation.

### Folder Structure

- **`src/`**: Contains the application source code.
  - **`application/`**: Application logic and use cases.
    - `application.module.ts`: Main module of the application layer.
    - **`profiles/`**: Transformations and mappings between models.
    - **`useCases/`**: Implementations of specific use cases (`todo`, etc.).
  - `app.module.ts`: Root module of the application.
  - **`common/`**: Utilities and shared classes.
    - **`classes/`**: Generic and abstract classes.
    - **`filters/`**: Filters for handling HTTP exceptions.
    - **`interceptors/`**: Interceptors for common functions like transactions.
    - **`types/`**: Type definitions and interfaces used throughout the project.
  - **`domain/`**: Domain logic.
    - `entities.ts`: Definition of domain entities.
    - **`interfaces/`**: Interfaces for services and repositories.
    - **`todo/`**: Domain-specific logic for `todo`.
      - **`dto/`**: Data Transfer Objects related to `todo`.
      - `todo.entity.ts`: Definition of the `todo` entity.
  - **`infrastructure/`**: Infrastructure implementation details.
    - **`external/`**: External integrations like HTTP adapters or external services.
    - `infrastructure.module.ts`: Main infrastructure module.
    - **`persistence/`**: Data persistence layer.
      - **`context/`**: Database contexts or other services.
      - **`database/`**: Configuration and connections to the database.
      - **`repositories/`**: Repository implementations (`todo`, etc.).
  - `main.ts`: Main entry point of the application.
  - **`presentation/`**: Presentation layer.
    - **`controllers/`**: Controllers that handle HTTP requests.
    - `presentation.module.ts`: Main presentation module.

### Testing

- **`__test__/`**: Contains unit and integration tests.
  - **`application/`**, **`infrastructure/`**, **`presentation/`**: Tests organized by layers.
  - **`mocks/`**: Test data and mocks used in the tests.

## Scripts

* **`build`**: `nest build`
  Compiles the project using the NestJS compiler.
* **`format`**: `prettier --write "src/**/*.ts" "__test__/**/*.ts"`
  Formats the source code and test files using Prettier.
* **`start`**: `nest start`
  Starts the application in production mode.
* **`dev`**: `nest start --watch --preserveWatchOutput`
  Starts the application in development mode, watching for file changes to automatically reload.
* **`start:debug`**: `nest start --debug --watch`
  Starts the application in development mode with debugging support and watching for changes.
* **`start:prod`**: `node dist/main`
  Starts the application from the compiled code in production mode.
* **`lint`**: `eslint "{src,apps,libs,__test__}/**/*.ts" --fix`
  Runs ESLint to check the source code and test files, applying automatic fixes where possible.
* **`test`**: `jest`
  Runs unit and integration tests using Jest.
* **`test:watch`**: `jest --watch`
  Runs tests in watch mode, re-running them when file changes are detected.
* **`test:cov`**: `jest --coverage`
  Runs tests and generates a code coverage report.
* **`test:debug`**: `node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand`
  Runs tests in debug mode.
* **`test:e2e`**: `jest --config ./test/jest-e2e.json`
  Runs end-to-end tests using the specific Jest configuration for E2E testing.
* **`lint-staged`**: `lint-staged`
  Runs linting on staged files using lint-staged.
* **`prepare`**: `husky`
  Configures Husky to manage Git hooks.

## Environment

* DB_HOST
* DB_USERNAME
* DB_PASSWORD
* DB_DATABASE
* DB_PORT
* PORT

## Local Execution

### Requirements

* Node.js
* PNPM (or NPM/Yarn, depending on your preferred package manager)

### Steps

#### 1. Clone Repository

```
git clone <NOMBRE_PROYECTO>
cd <NOMBRE_PROYECTO>
```

#### 2. Install Dependencies

```
pnpm install
```

if use NPM:

```
npm install
```

If use Yarn:

```
yarn install
```

### Execute in Dev Mode

For use the project in dev mode, execute the next command:

```
pnpm dev
```

If use NPM:

```
npm run dev
```

If use Yarn:

```
yarn dev
```


This command will start the application in development mode with automatic reload when file changes are detected.

### Build and Execution in Prod Mode

1. **Build the project**:

   ```
   pnpm build
   ```

   If use NPM:

   ```
   npm run build
   ```

   If use Yarn:

   ```
   yarn build
   ```

   This command build the project using TypeScript.
2. **Execute app**:

   ```
   pnpm start:prod
   ```

   If use NPM:

   ```
   npm run start:prod
   ```

   If use Yarn:

   ```
   yarn start:prod
   ```

   This command will run the application using the compiled code in production mode.

## Execution with Docker

### Requirements

* Docker
* Docker Compose

### Steps

1. **Clone repository**:

   ```
   git clone <NOMBRE_PROYECTO>
   cd <NOMBRE_PROYECTO>
   ```
2. **Build and up containers**:

   ```
   docker compose up --build
   ```

   This command will build the Docker images and pull up the containers defined in the file `docker-compose.yml`.
3. **Stop containers**:

   ```
   docker compose down
   ```

   This command will stop and remove containers created by Docker Compose.

### Configuration File

* **`docker-compose.yml`**: Contains the configuration for the Docker services required to run the application.
* **`Dockerfile`**: File used to build the Docker image of the application.

### Variables de Entorno

Make sure to define the necessary environment variables in a `.env` file in the project root or directly in the `docker-compose.yml` to properly configure the application.
