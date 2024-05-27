/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from './persistence/database/database.module';
/**
 * Providers
 */
import { REPOSITORIES } from './persistence/repositories/repositories';
import { AppContext } from './persistence/context/appContext.service';
import { EXTERNAL_PROVIDERS } from './external/external';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [AppContext, ...REPOSITORIES, ...EXTERNAL_PROVIDERS],
  exports: [AppContext, ...REPOSITORIES, ...EXTERNAL_PROVIDERS],
})
export class InfrastructureModule {}
