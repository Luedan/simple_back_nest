import { RefreshTokenInterface } from '@app/domain/interfaces/application/security/refreshToken.interface';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

/**
 * Represents the refresh token service.
 */
@Injectable()
export class RefreshToken implements RefreshTokenInterface {
  /**
   * Initializes the get token data service.
   * @param _jwt - The JWT service.
   */
  constructor(private readonly _jwt: JwtService) {}

  /**
   * Handles the refresh token.
   *
   * @param token - The refresh token to handle.
   * @returns The new token as a string, or null if an error occurs.
   */
  handle(token: string): string {
    try {
      const data = this._jwt.verify(token);

      return JSON.stringify(this._jwt.sign({ email: data.email, id: data.id }));
    } catch (error) {
      return null;
    }
  }
}
