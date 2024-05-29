import { UserRequestDto } from '@app/domain/user/dto/user-request.dto';
import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';

/**
 * Represents the interface for creating a user.
 */
export interface CreateUserInterface {
  /**
   * Handles the creation of a user.
   *
   * @param userRequestDto - The data transfer object containing the user details.
   * @returns A promise that resolves to the response containing the created user.
   */
  handle(userRequestDto: UserRequestDto): Promise<UserResponseDto>;
}
