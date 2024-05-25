import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';

/**
 * Interface for the "findAll" method of the Todo service.
 */
export interface FindAllTodoInterface {
  /**
   * Retrieves all todos.
   * @returns A promise that resolves to an array of TodoResponseDto objects.
   */
  handle(): Promise<TodoResponseDto[]>;
}
