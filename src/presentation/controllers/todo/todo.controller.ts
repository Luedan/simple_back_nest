import { TodoRequestDto } from '@app/domain/todo/dto/todo-request.dto';
import { TodoServices } from '@app/services/todo/todo.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Todo controller
 */
@Controller('todos')
@ApiTags('Todos')
export class TodoController {
  constructor(private readonly todoServices: TodoServices) {}

  /**
   * Create a new todo
   * @param createTodoDto
   * @returns
   */
  @Post()
  create(@Body() createTodoDto: TodoRequestDto) {
    return this.todoServices.create(createTodoDto);
  }

  /**
   * Get all todos
   * @returns
   */
  @Get()
  findAll() {
    return this.todoServices.findAll();
  }

  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoServices.findOne(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateTodoDto
   * @returns
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: TodoRequestDto) {
    return this.todoServices.update(+id, updateTodoDto);
  }

  /**
   * Remove todo
   * @param id
   * @returns
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoServices.remove(+id);
  }
}
