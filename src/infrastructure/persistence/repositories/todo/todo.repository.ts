import { HttpException, Injectable, Scope } from '@nestjs/common';
import { Todo } from '@app/domain/todo/todo.entity';
import { AppContext } from '../../context/appContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { TodoRepositoryInterface } from '@app/domain/interfaces/infrastructure/persistence/todo/todoRepository.interface';

/**
 * Represents a Todo repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class TodoRepository implements TodoRepositoryInterface {
  constructor(private readonly _context: AppContext) {}

  /**
   * Retrieves all todos from the database.
   * @param options - Optional criteria to filter the todos.
   * @returns A promise that resolves to an array of todos.
   * @throws HttpException if there's an error retrieving the todos from the database.
   */
  async getAll(options?: GetAllCriteriaType<Todo>): Promise<Todo[]> {
    try {
      return await this._context.todo.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new todo in the database.
   * @param todo - The todo object to create.
   * @returns A promise that resolves to the created todo.
   * @throws HttpException if there's an error creating the todo in the database.
   */
  async create(todo: Todo): Promise<Todo> {
    try {
      const userData = await this._context.todo.create(todo);
      return { ...todo, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a todo by the provided criteria in the database.
   * @param options - The criteria to find the todo.
   * @returns A promise that resolves to the found todo.
   * @throws HttpException if there's an error finding the todo in the database.
   */
  async findBy(options: GetOneCriteriaType<Todo>): Promise<Todo> {
    try {
      return await this._context.todo.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a todo in the database.
   * @param criteria - The criteria to find the todo to update.
   * @param todo - The updated todo object.
   * @returns A promise that resolves to the updated todo.
   * @throws HttpException if there's an error updating the todo in the database.
   */
  async update(criteria: UpdateCriteriaType<Todo>, todo: Todo): Promise<Todo> {
    try {
      const updateTodo = await this._context.todo.update(criteria, todo);
      return {
        ...todo,
        ...updateTodo?.raw[0],
        ...updateTodo?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a todo from the database.
   * @param criteria - The criteria to find the todo to delete.
   * @returns A promise that resolves to the deleted todo.
   * @throws HttpException if there's an error deleting the todo from the database.
   */
  async delete(criteria: DeleteCriteriaType<Todo>): Promise<Todo> {
    try {
      const deleteTodo = await this._context.todo.delete(criteria);
      return { ...deleteTodo?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a todo in the database.
   * @param todo - The todo object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved todo.
   * @throws HttpException if there's an error saving the todo in the database.
   */
  async save(todo: Todo, options?: SaveOptionsType<Todo>): Promise<Todo> {
    try {
      const userSaved = await this._context.todo.save(todo, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
