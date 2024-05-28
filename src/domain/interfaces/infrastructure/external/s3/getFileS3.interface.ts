import { GetFileRequestDto } from '@app/domain/s3/dto/getFile-request.dto';
import { GetFileResponseDto } from '@app/domain/s3/dto/getFile-response.dto';

/**
 * Represents the interface for getting a file from S3.
 */
export interface GetFileS3Interface {
  /**
   * Executes the request to get a file from S3.
   * @param getFileRequestDto - The DTO containing the request parameters.
   * @returns A promise that resolves to the response DTO.
   */
  execute(getFileRequestDto: GetFileRequestDto): Promise<GetFileResponseDto>;
}
