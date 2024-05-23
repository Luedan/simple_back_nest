import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { TodoRequestDto } from '@app/domain/todo/dto/todo-request.dto';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { CreateTodoInterface } from '@app/domain/interfaces/services/todo/createTodo.interface';

/**
 * Service class for creating a new todo.
 */
@Injectable()
export class CreateTodo implements CreateTodoInterface {
  /**
   * Creates an instance of the CreateTodoService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _todoRepository - The repository for managing Todo entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _todoRepository: TodoRepository,
  ) {}

  /**
   * Handles the creation of a new todo.
   *
   * @param createTodoDto - The data transfer object containing the todo details.
   * @returns The response containing the created todo.
   */
  async handle(todoRequestDto: TodoRequestDto): Promise<TodoResponseDto> {
    const todoPayload = this._mapper.map(todoRequestDto, TodoRequestDto, Todo);

    const todo = await this._todoRepository.createTodo(todoPayload);

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
