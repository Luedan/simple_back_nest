import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindAllS3ParameterInterface } from '@app/domain/interfaces/application/parameters/s3/findAllS3Parameter.interface';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';

/**
 * Service class for finding all s3Parameters.
 */
@Injectable()
export class FindAllS3Parameter implements FindAllS3ParameterInterface {
  /**
   * Constructs a new instance of the `FindAllS3ParameterService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _s3ParameterRepository - The repository for accessing s3Parameter data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _s3ParameterRepository: S3ParameterRepository,
  ) {}

  /**
   * Handles the finding of all s3Parameters.
   * @returns A promise that resolves to an array of S3ParameterResponseDto objects.
   */
  async handle(): Promise<S3ParameterResponseDto[]> {
    const s3Parameters = await this._s3ParameterRepository.getAll();

    const response = this._mapper.mapArray(
      s3Parameters,
      S3Parameter,
      S3ParameterResponseDto,
    );

    return response;
  }
}
