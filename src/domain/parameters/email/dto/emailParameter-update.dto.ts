import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EmailParameterUpdateDto {
  /**
   * The id of the Email parameter
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * The host of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  host: string;

  /**
   * The port of the Email parameter
   */
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  @AutoMap()
  port: number;

  /**
   * The username of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  username: string;

  /**
   * The password of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  password: string;

  /**
   * The secure of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  secure: boolean;

  /**
   * The from of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  from: string;
}
