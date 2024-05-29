import { ValidateTokenInterface } from '@app/domain/interfaces/application/security/validateToken.interface';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

/**
 * Represents the validate token service.
 */
@Injectable()
export class ValidateToken implements ValidateTokenInterface {
  /**
   * Initializes the get token data service.
   * @param _jwt - The JWT service.
   */
  constructor(private readonly _jwt: JwtService) {}

  /**
   * Handles the verification of a token.
   * @param token - The token to be verified.
   * @returns A boolean indicating whether the token is valid.
   */
  handle(token: string): boolean {
    try {
      this._jwt.verify(token);
      return true;
    } catch (e) {
      return false;
    }
  }
}
