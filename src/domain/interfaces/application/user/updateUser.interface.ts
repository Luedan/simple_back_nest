import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';
import { UserUpdateDto } from '@app/domain/user/dto/user-update.dto';

/**
 * Represents the interface for updating a user.
 */
export interface UpdateUserInterface {
  /**
   * Updates a user with the specified ID.
   * @param id - The ID of the user to update.
   * @param updateUserDto - The data to update the user with.
   * @returns A promise that resolves to the updated user response.
   */
  handle(id: number, updateUserDto: UserUpdateDto): Promise<UserResponseDto>;
}
