import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EmailParameterRequestDto {
  /**
   * The id of the Email parameter
   */
  @IsOptional()
  @IsNumber()
  @AutoMap()
  id: number;

  /**
   * The host of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  host: string;

  /**
   * The port of the Email parameter
   */
  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  port: number;

  /**
   * The username of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  username: string;

  /**
   * The password of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  password: string;

  /**
   * The secure of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  secure: boolean;

  /**
   * The from of the Email parameter
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  from: string;
}
