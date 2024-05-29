import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';

/**
 * Interface for the "findAll" method of the User service.
 */
export interface FindAllUserInterface {
  /**
   * Retrieves all users.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */
  handle(): Promise<UserResponseDto[]>;
}
