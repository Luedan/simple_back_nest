import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindAllEmailParameterInterface } from '@app/domain/interfaces/application/parameters/email/findAllEmailParameter.interface';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { EmailParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/email/emailParameter.repository';

/**
 * Service class for finding all emailParameters.
 */
@Injectable()
export class FindAllEmailParameter implements FindAllEmailParameterInterface {
  /**
   * Constructs a new instance of the `FindAllEmailParameterService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _emailParameterRepository - The repository for accessing emailParameter data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _emailParameterRepository: EmailParameterRepository,
  ) {}

  /**
   * Handles the finding of all emailParameters.
   * @returns A promise that resolves to an array of EmailParameterResponseDto objects.
   */
  async handle(): Promise<EmailParameterResponseDto[]> {
    const emailParameters = await this._emailParameterRepository.getAll();

    const response = this._mapper.mapArray(
      emailParameters,
      EmailParameter,
      EmailParameterResponseDto,
    );

    return response;
  }
}
