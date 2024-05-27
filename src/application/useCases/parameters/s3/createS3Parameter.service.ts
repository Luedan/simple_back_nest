import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateS3ParameterInterface } from '@app/domain/interfaces/application/parameters/s3/createS3Parameter.interface';
import { S3ParameterRequestDto } from '@app/domain/parameters/s3/dto/s3Parameter-request.dto';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';

/**
 * Service class for creating a new s3Parameter.
 */
@Injectable()
export class CreateS3Parameter implements CreateS3ParameterInterface {
  /**
   * Creates an instance of the CreateS3ParameterService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _s3ParameterRepository - The repository for managing S3Parameter entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _s3ParameterRepository: S3ParameterRepository,
  ) {}

  /**
   * Handles the creation of a new s3Parameter.
   *
   * @param createS3ParameterDto - The data transfer object containing the s3Parameter details.
   * @returns The response containing the created s3Parameter.
   */
  async handle(
    s3ParameterRequestDto: S3ParameterRequestDto,
  ): Promise<S3ParameterResponseDto> {
    const s3ParameterPayload = this._mapper.map(
      s3ParameterRequestDto,
      S3ParameterRequestDto,
      S3Parameter,
    );

    const s3Parameter =
      await this._s3ParameterRepository.create(s3ParameterPayload);

    const response = this._mapper.map(
      s3Parameter,
      S3Parameter,
      S3ParameterResponseDto,
    );

    return response;
  }
}
