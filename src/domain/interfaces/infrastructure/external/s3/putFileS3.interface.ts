import { PutFileRequestDto } from '@app/domain/s3/dto/putFile-request.dto';
import { PutFileResponseDto } from '@app/domain/s3/dto/putFile-response.dto';

/**
 * Interface for putting a file in S3.
 */
export interface PutFileS3Interface {
  /**
   * Executes the operation to put a file in S3.
   * @param putFileRequestDto - The DTO containing the information needed to put the file.
   * @returns A promise that resolves to the response DTO after the file is successfully put in S3.
   */
  execute(putFileRequestDto: PutFileRequestDto): Promise<PutFileResponseDto>;
}
