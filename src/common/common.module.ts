import { Global, Module } from '@nestjs/common';
import { FilesHelper } from './classes/utils/filesHelper';

@Module({
  providers: [FilesHelper],
  exports: [FilesHelper],
})
@Global()
export class CommonModule {}
