import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';

/**
 * Represents the interface for finding a single s3 parameter item.
 */
export interface FindOneS3ParameterInterface {
  /**
   * Finds a s3 parameter item by its ID.
   * @param id - The ID of the s3 parameter item.
   * @returns A promise that resolves to a S3ParameterResponseDto object representing the found s3 parameter item.
   */
  handle(id: number): Promise<S3ParameterResponseDto>;
}
