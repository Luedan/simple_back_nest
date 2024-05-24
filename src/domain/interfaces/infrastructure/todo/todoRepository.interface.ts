import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { Todo } from '@app/domain/todo/todo.entity';

/**
 * Represents the interface for a Todo repository.
 */
export interface TodoRepositoryInterface {
  /**
   * Retrieves all Todos based on the provided options.
   * @param options - The criteria to filter the Todos.
   * @returns A promise that resolves to an array of Todos.
   */
  getAll(options?: GetAllCriteriaType<Todo>): Promise<Todo[]>;

  /**
   * Creates a new Todo.
   * @param todo - The Todo object to create.
   * @returns A promise that resolves to the created Todo.
   */
  create(todo: Todo): Promise<Todo>;

  /**
   * Finds a Todo by the provided criteria.
   * @param options - The criteria to find the Todo.
   * @returns A promise that resolves to the found Todo.
   */
  findBy(options: GetOneCriteriaType<Todo>): Promise<Todo>;

  /**
   * Updates a Todo based on the provided criteria.
   * @param criteria - The criteria to update the Todo.
   * @param todo - The updated Todo object.
   * @returns A promise that resolves to the updated Todo.
   */
  update(criteria: UpdateCriteriaType<Todo>, todo: Todo): Promise<Todo>;

  /**
   * Deletes a Todo based on the provided criteria.
   * @param criteria - The criteria to delete the Todo.
   * @returns A promise that resolves to a boolean indicating if the Todo was deleted successfully.
   */
  delete(criteria: DeleteCriteriaType<Todo>): Promise<Todo>;

  /**
   * Saves a Todo.
   * @param todo - The Todo object to save.
   * @param options - The options for saving the Todo.
   * @returns A promise that resolves to the saved Todo.
   */
  save(todo: Todo, options?: SaveOptionsType<Todo>): Promise<Todo>;
}
