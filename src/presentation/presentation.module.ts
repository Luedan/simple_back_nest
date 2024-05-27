/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ApplicationModule } from '@app/application/application.module';
/**
 * Controllers
 */
import { TodoController } from './controllers/todo/todo.controller';
import { HealthController } from './controllers/health/health.controller';
import { DefaultController } from './controllers/default/default.controller';
import { S3ParameterController } from './controllers/parameters/s3/s3Parameter.controller';
import { EmailParameterController } from './controllers/parameters/email/emailParameter.controller';

@Module({
  imports: [ApplicationModule, TerminusModule],
  controllers: [
    DefaultController,
    HealthController,
    TodoController,
    S3ParameterController,
    EmailParameterController,
  ],
})
export class PresentationModule {}
