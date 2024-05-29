import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';

/**
 * Represents the interface for deleting a user.
 */
export interface DeleteUserInterface {
  /**
   * Handles the deletion of a user.
   * @param id - The ID of the user to be deleted.
   * @returns A promise that resolves to a UserResponseDto.
   */
  handle(id: number): Promise<UserResponseDto>;
}
