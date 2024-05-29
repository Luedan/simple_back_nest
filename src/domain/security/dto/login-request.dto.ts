import { IsString } from 'class-validator';

/**
 * Login request DTO
 */
export class LoginRequestDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
