import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';

/**
 * Represents the interface for finding a single todo item.
 */
export interface FindOneTodoInterface {
  /**
   * Finds a todo item by its ID.
   * @param id - The ID of the todo item.
   * @returns A promise that resolves to a TodoResponseDto object representing the found todo item.
   */
  handle(id: number): Promise<TodoResponseDto>;
}
