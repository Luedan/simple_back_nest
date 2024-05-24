/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { ApplicationModule } from '@app/application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [TodoController],
})
export class PresentationModule {}
