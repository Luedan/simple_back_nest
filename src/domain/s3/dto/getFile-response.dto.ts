import { AutoMap } from '@automapper/classes';

/**
 * Represents the response data for getting a file.
 */
export class GetFileResponseDto {
  /**
   * The message of the response.
   */
  @AutoMap()
  message: string;

  /**
   * The key of the file.
   */
  @AutoMap()
  key: string;

  /**
   * The name of the file.
   */
  @AutoMap()
  fileName: string;

  /**
   * The content of the file.
   */
  @AutoMap()
  body: Buffer;
}
