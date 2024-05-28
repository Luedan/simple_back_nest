import { AutoMap } from '@automapper/classes';

/**
 * The response DTO for the PutFile method.
 */
export class PutFileResponseDto {
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
   * The ETag of the file.
   */
  @AutoMap()
  eTag: string;
}
