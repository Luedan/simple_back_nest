import { TodoRequestDto } from '@app/domain/todo/dto/todo-request.dto';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';

/**
 * Represents the interface for creating a todo.
 */
export interface CreateTodoInterface {
  /**
   * Handles the creation of a todo.
   *
   * @param todoRequestDto - The data transfer object containing the todo details.
   * @returns A promise that resolves to the response containing the created todo.
   */
  handle(todoRequestDto: TodoRequestDto): Promise<TodoResponseDto>;
}
