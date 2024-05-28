import { DeleteFileResponseDto } from '@app/domain/s3/dto/deleteFile-response.dto';

/**
 * Interface for a service that deletes a file from S3.
 */
export interface DeleteFileS3Interface {
  /**
   * Deletes a file from S3.
   * @param key - The key of the file to delete.
   * @returns A promise that resolves to a `DeleteFileResponseDto` object.
   */
  execute(key: string): Promise<DeleteFileResponseDto>;
}
