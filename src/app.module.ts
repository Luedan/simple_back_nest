/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PresentationModule, CommonModule],
})
export class AppModule {}
