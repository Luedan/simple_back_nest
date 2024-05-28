import { Injectable, NotFoundException } from '@nestjs/common';
import { S3 } from '@aws-sdk/client-s3';
import { PutFileRequestDto } from '@app/domain/s3/dto/putFile-request.dto';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';
import { PutFileResponseDto } from '@app/domain/s3/dto/putFile-response.dto';
import { PutFileS3Interface } from '@app/domain/interfaces/infrastructure/external/s3/putFileS3.interface';

/**
 * Service class for putting a file in S3.
 */
@Injectable()
export class PutFileS3 implements PutFileS3Interface {
  /**
   * Constructs a new instance of the `PutFileS3` class.
   * @param s3ParameterRepository - The repository for accessing S3 parameters.
   */
  constructor(private readonly s3ParameterRepository: S3ParameterRepository) {}

  /**
   * Executes the operation to put a file in S3.
   * @param putFileRequestDto - The DTO containing the file information.
   * @returns A promise that resolves to the response DTO.
   * @throws {NotFoundException} If no parameters are found.
   * @throws {Error} If there is an error putting the file in S3.
   */
  async execute(
    putFileRequestDto: PutFileRequestDto,
  ): Promise<PutFileResponseDto> {
    try {
      const parameters = await this.s3ParameterRepository.getAll();

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

      const s3Response = await s3Client.putObject({
        Bucket: parameter.bucket,
        Key: putFileRequestDto.key,
        Body: putFileRequestDto.body,
      });

      if (s3Response.$metadata.httpStatusCode !== 200) {
        throw new Error(`Error putting file ${putFileRequestDto.key} in S3.`);
      }

      return {
        message: `File ${putFileRequestDto.key} put in S3.`,
        key: putFileRequestDto.key,
        eTag: s3Response.ETag,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
