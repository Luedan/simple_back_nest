import { LoginRequestDto } from '@app/domain/security/dto/login-request.dto';
import { LoginResponseDto } from '@app/domain/security/dto/login-response.dto';

/**
 * Represents the interface for handling login requests.
 */
export interface LoginInterface {
  /**
   * Handles a login request and returns a promise that resolves to a login response.
   * @param loginRequestDto - The login request data transfer object.
   * @returns A promise that resolves to a login response data transfer object.
   */
  handle(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto>;
}
