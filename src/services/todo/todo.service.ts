import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { TodoRequestDto } from '@app/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { TodoUpdateDto } from '@app/domain/todo/dto/todo-update.dto';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoServiceInterface } from '@app/domain/interfaces/services/todo/todoService.interface';

/**
 * Represents a Todo service.
 */
@Injectable()
export class TodoServices implements TodoServiceInterface {
  constructor(
    private readonly _todoRepository: TodoRepository,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  /**
   * Creates a new todo.
   * @param createTodoDto - The data for creating a todo.
   * @returns A promise that resolves to the created todo.
   */
  async create(createTodoDto: TodoRequestDto): Promise<TodoResponseDto> {
    const todoPayload = this._mapper.map(createTodoDto, TodoRequestDto, Todo);

    const todo = await this._todoRepository.createTodo(todoPayload);

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Retrieves all todos.
   * @returns A promise that resolves to an array of todos.
   */
  async findAll(): Promise<TodoResponseDto[]> {
    const todos = await this._todoRepository.getAllTodos();

    const response = this._mapper.mapArray(todos, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Retrieves a todo by its ID.
   * @param id - The ID of the todo to retrieve.
   * @returns A promise that resolves to the retrieved todo.
   */
  async findOne(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.findTodoById({
      where: { id },
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Updates a todo.
   * @param id - The ID of the todo to update.
   * @param updateTodoDto - The data for updating the todo.
   * @returns A promise that resolves to the updated todo.
   */
  async update(
    id: number,
    updateTodoDto: TodoUpdateDto,
  ): Promise<TodoResponseDto> {
    const todoUpdatePayload = this._mapper.map(
      updateTodoDto,
      TodoUpdateDto,
      Todo,
    );

    const todo = await this._todoRepository.updateTodo(id, todoUpdatePayload);

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Removes a todo.
   * @param id - The ID of the todo to remove.
   * @returns A promise that resolves to the removed todo.
   */
  async remove(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.deleteTodo({
      id,
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
