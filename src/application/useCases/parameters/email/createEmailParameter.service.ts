import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateEmailParameterInterface } from '@app/domain/interfaces/application/parameters/email/createEmailParameter.interface';
import { EmailParameterRequestDto } from '@app/domain/parameters/email/dto/emailParameter-request.dto';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { EmailParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/email/emailParameter.repository';

/**
 * Service class for creating a new emailParameter.
 */
@Injectable()
export class CreateEmailParameter implements CreateEmailParameterInterface {
  /**
   * Creates an instance of the CreateEmailParameterService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _emailParameterRepository - The repository for managing EmailParameter entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _emailParameterRepository: EmailParameterRepository,
  ) {}

  /**
   * Handles the creation of a new emailParameter.
   *
   * @param createEmailParameterDto - The data transfer object containing the emailParameter details.
   * @returns The response containing the created emailParameter.
   */
  async handle(
    emailParameterRequestDto: EmailParameterRequestDto,
  ): Promise<EmailParameterResponseDto> {
    const emailParameterPayload = this._mapper.map(
      emailParameterRequestDto,
      EmailParameterRequestDto,
      EmailParameter,
    );

    const emailParameter = await this._emailParameterRepository.create(
      emailParameterPayload,
    );

    const response = this._mapper.map(
      emailParameter,
      EmailParameter,
      EmailParameterResponseDto,
    );

    return response;
  }
}
