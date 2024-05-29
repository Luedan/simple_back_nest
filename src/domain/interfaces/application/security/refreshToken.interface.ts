/**
 * Interface for the refresh token.
 */
export interface RefreshTokenInterface {
  /**
   * Handles the refresh of a token.
   *
   * @param token - The token to be refreshed.
   * @returns The refreshed token or null if refresh fails.
   */
  handle(token: string): string | null;
}
