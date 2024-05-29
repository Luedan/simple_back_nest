import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';

/**
 * Represents the interface for finding a single user item.
 */
export interface FindOneUserInterface {
  /**
   * Finds a user item by its ID.
   * @param id - The ID of the user item.
   * @returns A promise that resolves to a UserResponseDto object representing the found user item.
   */
  handle(id: number): Promise<UserResponseDto>;
}
