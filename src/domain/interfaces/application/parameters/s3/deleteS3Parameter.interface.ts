import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';

/**
 * Represents the interface for deleting a s3 parameter.
 */
export interface DeleteS3ParameterInterface {
  /**
   * Handles the deletion of a s3 parameter.
   * @param id - The ID of the s3 parameter to be deleted.
   * @returns A promise that resolves to a S3ParameterResponseDto.
   */
  handle(id: number): Promise<S3ParameterResponseDto>;
}
