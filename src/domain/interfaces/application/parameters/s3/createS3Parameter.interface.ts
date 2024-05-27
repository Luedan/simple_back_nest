import { S3ParameterRequestDto } from '@app/domain/parameters/s3/dto/s3Parameter-request.dto';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';

/**
 * Represents the interface for creating a s3Parameter.
 */
export interface CreateS3ParameterInterface {
  /**
   * Handles the creation of a s3Parameter.
   *
   * @param s3ParameterRequestDto - The data transfer object containing the s3Parameter details.
   * @returns A promise that resolves to the response containing the created s3Parameter.
   */
  handle(
    s3ParameterRequestDto: S3ParameterRequestDto,
  ): Promise<S3ParameterResponseDto>;
}
