/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ApplicationModule } from '@app/application/application.module';
/**
 * Controllers
 */
import { CONTROLLERS } from './controllers/controller';

@Module({
  imports: [ApplicationModule, TerminusModule],
  controllers: [...CONTROLLERS],
})
export class PresentationModule {}
