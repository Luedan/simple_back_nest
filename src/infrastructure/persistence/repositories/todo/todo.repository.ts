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

@Injectable({ scope: Scope.REQUEST })
export class TodoRepository {
  constructor(private readonly _context: AppContext) {}

  /**
   * Create a new todo
   * @param options Todo options
   * @returns Todo
   */
  async getAllTodos(options?: GetAllCriteriaType<Todo>): Promise<Todo[]> {
    try {
      return await this._context.todo.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Create a new todo
   * @param options Todo options
   * @returns Todo
   */
  async createTodo(todo: Todo): Promise<Todo> {
    try {
      const userData = await this._context.todo.create(todo);
      return { ...todo, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find todo by id
   * @param id Todo id
   * @returns Todo
   */
  async findTodoById(options: GetOneCriteriaType<Todo>): Promise<Todo> {
    try {
      return await this._context.todo.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Delete todo
   * @param criteria Todo id
   * @returns Todo
   */
  async updateTodo(
    criteria: UpdateCriteriaType<Todo>,
    todo: Todo,
  ): Promise<Todo> {
    try {
      const updateTodo = await this._context.todo.update(criteria, todo);
      return {
        ...todo,
        ...updateTodo?.raw[0],
        ...updateTodo?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Delete todo
   * @param criteria Todo id
   * @returns Todo
   */
  async deleteTodo(criteria: DeleteCriteriaType<Todo>): Promise<Todo> {
    try {
      const todo = await this.findTodoById({ where: criteria });
      const deleteTodo = await this._context.todo.delete(criteria);
      return { ...todo, ...deleteTodo?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Save todo
   * @param todo Todo
   * @param options Save options
   * @returns
   */
  async saveTodo(todo: Todo, options?: SaveOptionsType<Todo>): Promise<Todo> {
    try {
      const userSaved = await this._context.todo.save(todo, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }
}
