import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { TodoRequestDto } from '@app/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { TodoUpdateDto } from '@app/domain/todo/dto/todo-update.dto';
import { TodoRepository } from '@app/infrastructure/persistence/repositories/todo/todo.repository';
import { Todo } from '@app/domain/todo/todo.entity';

/**
 * Todo services
 */
@Injectable()
export class TodoServices {
  constructor(
    private readonly _todoRepository: TodoRepository,
    @InjectMapper() private readonly _mapper: Mapper,
  ) {}

  /**
   * Create a new todo
   * @param createTodoDto
   */
  async create(createTodoDto: TodoRequestDto): Promise<TodoResponseDto> {
    const todoPayload = this._mapper.map(createTodoDto, TodoRequestDto, Todo);

    const todo = await this._todoRepository.createTodo(todoPayload);

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Get all todos
   */
  async findAll(): Promise<TodoResponseDto[]> {
    const todos = await this._todoRepository.getAllTodos();

    const response = this._mapper.mapArray(todos, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Get todo by id
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.findTodoById({
      where: { id },
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }

  /**
   * Update todo
   * @param id
   * @param updateTodoDto
   * @returns
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
   * Remove todo
   * @param id
   * @returns
   */
  async remove(id: number): Promise<TodoResponseDto> {
    const todo = await this._todoRepository.deleteTodo({
      id,
    });

    const response = this._mapper.map(todo, Todo, TodoResponseDto);

    return response;
  }
}
