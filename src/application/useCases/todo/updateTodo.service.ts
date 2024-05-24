import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { TodoUpdateDto } from '@app/domain/todo/dto/todo-update.dto';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { UpdateTodoInterface } from '@app/domain/interfaces/services/todo/updateTodo.interface';
import { FindOneTodo } from './findOneTodo.service';

/**
 * Service class for updating a todo.
 */
@Injectable()
export class UpdateTodo implements UpdateTodoInterface {
  /**
   * Constructs a new instance of the UpdateTodoService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _todoRepository - The repository for accessing todo data.
   * @param _findOneTodo - The use case for finding a single todo.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
    private readonly _findOneTodo: FindOneTodo,
  ) {}

  /**
   * Handles the update of a todo item.
   *
   * @param id - The ID of the todo item to update.
   * @param todoUpdateDto - The data to update the todo item with.
   * @returns The updated todo item.
   * @throws NotFoundException if the todo item with the specified ID is not found.
   */
  async handle(
    id: number,
    todoUpdateDto: TodoUpdateDto,
  ): Promise<TodoResponseDto> {
    const exist = await this._findOneTodo.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    const todoUpdatePayload = this._mapper.map(
      todoUpdateDto,
      TodoUpdateDto,
      Todo,
    );

    const todo = await this._todoRepository.update(id, todoUpdatePayload);

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
