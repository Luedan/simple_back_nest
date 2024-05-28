import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Represents the request data for getting a file.
 */
export class GetFileRequestDto {
  /**
   * The key of the file to get.
   */
  @IsString()
  @IsNotEmpty()
  @AutoMap()
  key: string;
}
