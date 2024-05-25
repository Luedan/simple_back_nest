import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { TodoUpdateDto } from '@app/domain/todo/dto/todo-update.dto';

/**
 * Represents the interface for updating a todo.
 */
export interface UpdateTodoInterface {
  /**
   * Updates a todo with the specified ID.
   * @param id - The ID of the todo to update.
   * @param updateTodoDto - The data to update the todo with.
   * @returns A promise that resolves to the updated todo response.
   */
  handle(id: number, updateTodoDto: TodoUpdateDto): Promise<TodoResponseDto>;
}
