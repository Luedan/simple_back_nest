import { Injectable, NotFoundException } from '@nestjs/common';
import { S3 } from '@aws-sdk/client-s3';
import { DeleteFileS3Interface } from '@app/domain/interfaces/infrastructure/external/s3/deleteFileS3.interface';
import { DeleteFileResponseDto } from '@app/domain/s3/dto/deleteFile-response.dto';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';

/**
 * Service class for deleting a file from Amazon S3.
 */
@Injectable()
export class DeleteFileS3 implements DeleteFileS3Interface {
  /**
   * Represents the DeleteFileS3Service class.
   * This class is responsible for deleting files from S3.
   */
  constructor(private readonly _s3ParameterRepository: S3ParameterRepository) {}

  /**
   * Deletes a file from S3.
   * @param key - The key of the file to be deleted.
   * @returns A promise that resolves to a DeleteFileResponseDto object containing the message and key of the deleted file.
   * @throws NotFoundException if no parameters are found.
   * @throws Error if there is an error deleting the file from S3.
   */
  async execute(key: string): Promise<DeleteFileResponseDto> {
    try {
      const parameters = await this._s3ParameterRepository.getAll();

      if (!parameters?.length) {
        throw new NotFoundException('No parameters found.');
      }

      const parameter = parameters[0];

      const s3Client = new S3({
        region: parameter.region,
        credentials: {
          accessKeyId: parameter.accessKeyId,
          secretAccessKey: parameter.secretAccessKey,
        },
      });

      await s3Client.deleteObject({
        Bucket: parameter.bucket,
        Key: key,
      });

      const response = {
        message: `File ${key} deleted successfully.`,
        key,
      };

      return response;
    } catch (error) {
      throw new Error(`Error deleting file ${key} from S3.`);
    }
  }
}
