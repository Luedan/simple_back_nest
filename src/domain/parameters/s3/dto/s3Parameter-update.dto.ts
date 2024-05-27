import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class S3ParameterUpdateDto {
  /**
   * The id of the S3 parameter
   */
  @IsOptional()
  @IsNumber()
  @AutoMap()
  id: number;

  /**
   * The Bucket of the S3 parameter
   */
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  bucket: string;

  /**
   * The accessKeyId of the S3 parameter
   */
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  accessKeyId: string;

  /**
   * The secretAccessKey of the S3 parameter
   */
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  secretAccessKey: string;

  /**
   * The region of the S3 parameter
   */
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  region: string;

  /**
   * The endpoint of the S3 parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  endpoint: string;

  /**
   * The url of the S3 parameter
   */
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @AutoMap()
  url: string;
}
