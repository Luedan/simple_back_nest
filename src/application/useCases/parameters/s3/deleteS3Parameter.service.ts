import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { S3ParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/s3/s3Parameter.repository';

/**
 * Service class for deleting a s3Parameter.
 */
@Injectable()
export class DeleteS3Parameter {
  /**
   * Constructs a new instance of the DeleteS3ParameterService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _s3ParameterRepository - The repository for accessing s3Parameter data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _s3ParameterRepository: S3ParameterRepository,
  ) {}

  /**
   * Handles the deletion of a s3Parameter item.
   *
   * @param id - The ID of the s3Parameter item to be deleted.
   * @returns A promise that resolves to a S3ParameterResponseDto representing the deleted s3Parameter item.
   */
  async handle(id: number): Promise<S3ParameterResponseDto> {
    const s3Parameter = await this._s3ParameterRepository.delete({
      id,
    });

    const response = this._mapper.map(
      s3Parameter,
      S3Parameter,
      S3ParameterResponseDto,
    );

    return response;
  }
}
