import { LoginInterface } from '@app/domain/interfaces/application/security/login.interface';
import { LoginRequestDto } from '@app/domain/security/dto/login-request.dto';
import { LoginResponseDto } from '@app/domain/security/dto/login-response.dto';
import { UserRepository } from '@app/infrastructure/persistence/repositories/user/user.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

/**
 * Represents the login service.
 */
@Injectable()
export class Login implements LoginInterface {
  /**
   * Initializes the login service.
   * @param _userRepository - The user repository.
   * @param _jwt - The JWT service.
   */
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _jwt: JwtService,
  ) {}

  /**
   * Handles the login request.
   * @param loginRequestDto - The login request data transfer object.
   * @returns A promise that resolves to a LoginResponseDto object containing the token.
   */
  async handle(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this._userRepository.findBy({
      where: { email: loginRequestDto?.email },
    });

    if (!user?.id) {
      return { token: null };
    }

    const comparePassword = bcrypt.compareSync(
      loginRequestDto?.password,
      user?.password,
    );

    if (!comparePassword) {
      return { token: null };
    }

    const payload = {
      email: user?.email,
      id: user?.id,
    };

    return {
      token: this._jwt.sign(payload),
    };
  }
}
