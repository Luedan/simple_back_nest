import { Injectable, NotFoundException } from '@nestjs/common';
import { GetFileS3Interface } from '@app/domain/interfaces/infrastructure/external/s3/getFileS3.interface';
import { GetFileRequestDto } from '@app/domain/s3/dto/getFile-request.dto';
import { GetFileResponseDto } from '@app/domain/s3/dto/getFile-response.dto';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';
import { S3 } from '@aws-sdk/client-s3';
import { FilesHelper } from '../../../common/classes/utils/filesHelper';

/**
 * Service class for getting a file from Amazon S3.
 */
@Injectable()
export class GetFileS3 implements GetFileS3Interface {
  /**
   * Constructs a new instance of the `GetFileS3` class.
   * @param _s3ParameterRepository - The repository for accessing S3 parameters.
   * @param _fileHelper - The helper class for file operations.
   */
  constructor(
    private readonly _s3ParameterRepository: S3ParameterRepository,
    private readonly _fileHelper: FilesHelper,
  ) {}

  /**
   * Retrieves a file from Amazon S3.
   *
   * @param getFileRequestDto - The DTO containing the request parameters.
   * @returns A promise that resolves to a GetFileResponseDto object containing the retrieved file information.
   * @throws {NotFoundException} If no S3 parameters are found.
   * @throws {Error} If there is an error retrieving the file from S3.
   */
  async execute(
    getFileRequestDto: GetFileRequestDto,
  ): Promise<GetFileResponseDto> {
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

      const s3Response = await s3Client.getObject({
        Bucket: parameter.bucket,
        Key: getFileRequestDto.key,
      });

      if (s3Response.$metadata.httpStatusCode !== 200) {
        throw new Error(`Error getting file ${getFileRequestDto.key} from S3.`);
      }

      const bodyRes = await s3Response.Body.transformToString('base64');

      const body = `data:${this._fileHelper.extFileType(this._fileHelper.getFileNameFromAwsKey(getFileRequestDto.key))};base64,${bodyRes}`;

      return {
        message: `File ${getFileRequestDto.key} retrieved from S3.`,
        key: getFileRequestDto.key,
        body,
      };
    } catch (error) {
      throw new Error(
        `Error getting file ${getFileRequestDto.key} from S3: ${error.message}`,
      );
    }
  }
}
