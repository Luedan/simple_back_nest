import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserUpdateDto {
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
  @IsOptional()
  @AutoMap()
  email: string;

  /**
   * Password
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  password: string;
}
