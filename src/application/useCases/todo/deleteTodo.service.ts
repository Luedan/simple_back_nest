import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a todo.
 */
@Injectable()
export class DeleteTodo {
  /**
   * Constructs a new instance of the DeleteTodoService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _todoRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Handles the deletion of a todo item.
   *
   * @param id - The ID of the todo item to be deleted.
   * @returns A promise that resolves to a TodoResponseDto representing the deleted todo item.
   */
  async handle(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.deleteTodo({
      id,
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
