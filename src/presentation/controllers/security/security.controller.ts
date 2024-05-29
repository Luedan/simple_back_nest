import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetTokenData } from '@app/application/useCases/security/getTokenData.service';
import { Login } from '@app/application/useCases/security/login.service';
import { RefreshToken } from '@app/application/useCases/security/refreshToken.service';
import { ValidateToken } from '@app/application/useCases/security/validateToken.service';
import { LoginRequestDto } from '@app/domain/security/dto/login-request.dto';

@Controller('security')
@ApiTags('Security')
export class SecurityController {
  constructor(
    private readonly _login: Login,
    private readonly _getTokenData: GetTokenData,
    private readonly _refreshToken: RefreshToken,
    private readonly _validateToken: ValidateToken,
  ) {}

  /**
   * Login
   * @param loginDto
   * @returns
   */
  @Post('login')
  login(@Body() loginDto: LoginRequestDto) {
    return this._login.handle(loginDto);
  }

  /**
   * Get token data
   * @param token
   * @returns
   */
  @Get('/tokenData/:token')
  getTokenData(@Param('token') token: string) {
    return this._getTokenData.handle(token);
  }

  /**
   * Refresh token
   * @param token
   * @returns
   */
  @Get('/refreshToken/:token')
  refreshToken(@Param('token') token: string) {
    return this._refreshToken.handle(token);
  }

  /**
   * Validate token
   * @param token
   * @returns
   */
  @Get('/validateToken/:token')
  validateToken(@Param('token') token: string) {
    return this._validateToken.handle(token);
  }
}
