import { ServiceModule } from '@app/services/services.module';
import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';

@Module({
  imports: [ServiceModule],
  controllers: [TodoController],
})
export class PresentationModule {}
