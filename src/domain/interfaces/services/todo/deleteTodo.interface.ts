import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';

/**
 * Represents the interface for deleting a todo.
 */
export interface DeleteTodoInterface {
  /**
   * Handles the deletion of a todo.
   * @param id - The ID of the todo to be deleted.
   * @returns A promise that resolves to a TodoResponseDto.
   */
  handle(id: number): Promise<TodoResponseDto>;
}
