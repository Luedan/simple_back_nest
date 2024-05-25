import { TodoRequestDto } from '@app/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { TodoUpdateDto } from '@app/domain/todo/dto/todo-update.dto';

/**
 * Represents the interface for a Todo Service.
 */
export interface TodoServiceInterface {
  /**
   * Creates a new todo.
   * @param createTodoDto - The data for creating a todo.
   * @returns A promise that resolves to the created todo.
   */
  create(createTodoDto: TodoRequestDto): Promise<TodoResponseDto>;

  /**
   * Retrieves all todos.
   * @returns A promise that resolves to an array of todos.
   */
  findAll(): Promise<TodoResponseDto[]>;

  /**
   * Retrieves a specific todo by its ID.
   * @param id - The ID of the todo to retrieve.
   * @returns A promise that resolves to the retrieved todo.
   */
  findOne(id: number): Promise<TodoResponseDto>;

  /**
   * Updates a specific todo.
   * @param id - The ID of the todo to update.
   * @param updateTodoDto - The data for updating the todo.
   * @returns A promise that resolves to the updated todo.
   */
  update(id: number, updateTodoDto: TodoUpdateDto): Promise<TodoResponseDto>;

  /**
   * Removes a specific todo.
   * @param id - The ID of the todo to remove.
   * @returns A promise that resolves to the removed todo.
   */
  remove(id: number): Promise<TodoResponseDto>;
}
