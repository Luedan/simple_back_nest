/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * Bootstrap the application
 */
async function bootstrap() {
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('/api');
  app.useBodyParser('json', {
    limit: '50mb',
  });

  const config = new DocumentBuilder()
    .setTitle('The API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('/docs', app, document);
  }

  await app.listen(PORT);

  Logger.log(`Server running on http://localhost:${PORT}/docs`, 'Bootstrap');
}
bootstrap();
