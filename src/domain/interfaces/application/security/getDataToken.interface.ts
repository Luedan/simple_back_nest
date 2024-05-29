import { TokenDataResponseDto } from '@app/domain/security/dto/tokenData-response.dto';

/**
 * Represents the interface for handling token data requests.
 */
export interface GetTokenDataInterface {
  /**
   * Handles a token and returns the data.
   * @param token - The token.
   * @returns The data of the token.
   */
  handle(token: string): TokenDataResponseDto | null;
}
