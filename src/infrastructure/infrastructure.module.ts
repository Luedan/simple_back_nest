/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './persistence/database/database.module';
import { REPOSITORIES } from './persistence/repositories/repositories';
import { AppContext } from './persistence/context/appContext.service';

@Module({
  imports: [DatabaseModule],
  providers: [AppContext, ...REPOSITORIES],
  exports: [AppContext, ...REPOSITORIES],
})
export class InfrastructureModule {}
