import { GetTokenDataInterface } from '@app/domain/interfaces/application/security/getDataToken.interface';
import { TokenDataResponseDto } from '@app/domain/security/dto/tokenData-response.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

/**
 * Represents the get token data service.
 */
@Injectable()
export class GetTokenData implements GetTokenDataInterface {
  /**
   * Initializes the get token data service.
   * @param _jwt - The JWT service.
   */
  constructor(private readonly _jwt: JwtService) {}

  /**
   * Handles the verification of a token.
   *
   * @param token - The token to be verified.
   * @returns The verified token data or null if verification fails.
   */
  handle(token: string) {
    try {
      return this._jwt.verify<TokenDataResponseDto>(token);
    } catch (error) {
      return null;
    }
  }
}
