import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindOneS3ParameterInterface } from '@app/domain/interfaces/application/parameters/s3/findOneS3Parameter.interface';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';

/**
 * Service class for finding a s3Parameter by its ID.
 */
@Injectable()
export class FindOneS3Parameter implements FindOneS3ParameterInterface {
  /**
   * Constructs a new instance of the FindOneS3ParameterService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _s3ParameterRepository - The repository for accessing s3Parameter data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _s3ParameterRepository: S3ParameterRepository,
  ) {}

  /**
   * Retrieves a s3Parameter by its ID.
   *
   * @param id - The ID of the s3Parameter to retrieve.
   * @returns A Promise that resolves to a S3ParameterResponseDto object representing the retrieved s3Parameter.
   */
  async handle(id: number): Promise<S3ParameterResponseDto> {
    const s3Parameter = await this._s3ParameterRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      s3Parameter,
      S3Parameter,
      S3ParameterResponseDto,
    );

    return response;
  }
}
