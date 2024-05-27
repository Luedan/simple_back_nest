import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateS3ParameterInterface } from '@app/domain/interfaces/application/parameters/s3/updateS3Parameter.interface';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';
import { S3ParameterUpdateDto } from '@app/domain/parameters/s3/dto/s3Parameter-update.dto';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';
import { FindOneS3Parameter } from './findOneS3Parameter.service';

/**
 * Service class for updating a s3Parameter.
 */
@Injectable()
export class UpdateS3Parameter implements UpdateS3ParameterInterface {
  /**
   * Constructs a new instance of the UpdateS3ParameterService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _s3ParameterRepository - The repository for accessing s3Parameter data.
   * @param _findOneS3Parameter - The use case for finding a single s3Parameter.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _s3ParameterRepository: S3ParameterRepository,
    private readonly _findOneS3Parameter: FindOneS3Parameter,
  ) {}

  /**
   * Handles the update of a s3Parameter item.
   *
   * @param id - The ID of the s3Parameter item to update.
   * @param s3ParameterUpdateDto - The data to update the s3Parameter item with.
   * @returns The updated s3Parameter item.
   * @throws NotFoundException if the s3Parameter item with the specified ID is not found.
   */
  async handle(
    id: number,
    s3ParameterUpdateDto: S3ParameterUpdateDto,
  ): Promise<S3ParameterResponseDto> {
    const exist = await this._findOneS3Parameter.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`S3Parameter with id ${id} not found`);
    }

    const s3ParameterUpdatePayload = this._mapper.map(
      s3ParameterUpdateDto,
      S3ParameterUpdateDto,
      S3Parameter,
    );

    const s3Parameter = await this._s3ParameterRepository.update(
      id,
      s3ParameterUpdatePayload,
    );

    const response = this._mapper.map(
      s3Parameter,
      S3Parameter,
      S3ParameterResponseDto,
    );

    return response;
  }
}
