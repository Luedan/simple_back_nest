import { S3ParameterUpdateDto } from '@app/domain/parameters/s3/dto/s3Parameter-update.dto';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';

/**
 * Represents the interface for updating a s3 parameter.
 */
export interface UpdateS3ParameterInterface {
  /**
   * Updates a s3 parameter with the specified ID.
   * @param id - The ID of the s3 parameter to update.
   * @param updateS3ParameterDto - The data to update the s3 parameter with.
   * @returns A promise that resolves to the updated s3 parameter response.
   */
  handle(
    id: number,
    updateS3ParameterDto: S3ParameterUpdateDto,
  ): Promise<S3ParameterResponseDto>;
}
