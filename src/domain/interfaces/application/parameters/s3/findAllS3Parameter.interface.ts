import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';

/**
 * Interface for the "findAll" method of the S3Parameter service.
 */
export interface FindAllS3ParameterInterface {
  /**
   * Retrieves all s3 parameters.
   * @returns A promise that resolves to an array of S3ParameterResponseDto objects.
   */
  handle(): Promise<S3ParameterResponseDto[]>;
}
