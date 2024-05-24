import { FindAllTodoInterface } from '@app/domain/interfaces/services/todo/findAllTodo.interface';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all todos.
 */
@Injectable()
export class FindAllTodo implements FindAllTodoInterface {
  /**
   * Constructs a new instance of the `FindAllTodoService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _todoRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Handles the finding of all todos.
   * @returns A promise that resolves to an array of TodoResponseDto objects.
   */
  async handle(): Promise<TodoResponseDto[]> {
    const todos = await this._todoRepository.getAll();

    const response = this._mapper.mapArray(todos, Todo, TodoResponseDto);

    return response;
  }
}
