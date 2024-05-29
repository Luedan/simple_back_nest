import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserRequestDto {
  /**
   * User id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id?: number;

  /**
   * Email
   */
  @IsEmail()
  @AutoMap()
  email: string;

  /**
   * Password
   */
  @IsString()
  @AutoMap()
  password: string;
}
