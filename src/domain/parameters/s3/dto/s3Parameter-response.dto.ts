import { AutoMap } from '@automapper/classes';

export class S3ParameterResponseDto {
  /**
   * The id of the S3 parameter
   */
  @AutoMap()
  id: number;

  /**
   * The Bucket of the S3 parameter
   */
  @AutoMap()
  bucket: string;

  /**
   * The accessKeyId of the S3 parameter
   */
  @AutoMap()
  accessKeyId: string;

  /**
   * The secretAccessKey of the S3 parameter
   */
  @AutoMap()
  secretAccessKey: string;

  /**
   * The region of the S3 parameter
   */
  @AutoMap()
  region: string;

  /**
   * The endpoint of the S3 parameter
   */
  @AutoMap()
  endpoint: string;

  /**
   * The url of the S3 parameter
   */
  @AutoMap()
  url: string;
}
