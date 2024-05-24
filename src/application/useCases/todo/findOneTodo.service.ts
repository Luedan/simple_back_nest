import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindOneTodoInterface } from '@app/domain/interfaces/services/todo/findOneTodo.interface';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';

/**
 * Service class for finding a todo by its ID.
 */
@Injectable()
export class FindOneTodo implements FindOneTodoInterface {
  /**
   * Constructs a new instance of the FindOneTodoService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _todoRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Retrieves a todo by its ID.
   *
   * @param id - The ID of the todo to retrieve.
   * @returns A Promise that resolves to a TodoResponseDto object representing the retrieved todo.
   */
  async handle(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
