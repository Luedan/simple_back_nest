import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Represents the request data for putting a file.
 */
export class PutFileRequestDto {
  /**
   * The key or name of the file.
   */
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  key: string;

  /**
   * The content of the file.
   */
  @IsNotEmpty()
  @AutoMap()
  body: Buffer;
}
