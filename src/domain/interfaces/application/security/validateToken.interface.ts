/**
 * Interface for the validation of a token.
 */
export interface ValidateTokenInterface {
  /**
   * Handles the verification of a token.
   *
   * @param token - The token to be verified.
   * @returns The verified token data or null if verification fails.
   */
  handle(token: string): boolean;
}
