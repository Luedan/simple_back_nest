import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateEmailParameterInterface } from '@app/domain/interfaces/application/parameters/email/updateEmailParameter.interface';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameterUpdateDto } from '@app/domain/parameters/email/dto/emailParameter-update.dto';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { EmailParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/email/emailParameter.repository';
import { FindOneEmailParameter } from './findOneEmailParameter.service';

/**
 * Service class for updating a emailParameter.
 */
@Injectable()
export class UpdateEmailParameter implements UpdateEmailParameterInterface {
  /**
   * Constructs a new instance of the UpdateEmailParameterService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _emailParameterRepository - The repository for accessing emailParameter data.
   * @param _findOneEmailParameter - The use case for finding a single emailParameter.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _emailParameterRepository: EmailParameterRepository,
    private readonly _findOneEmailParameter: FindOneEmailParameter,
  ) {}

  /**
   * Handles the update of a emailParameter item.
   *
   * @param id - The ID of the emailParameter item to update.
   * @param emailParameterUpdateDto - The data to update the emailParameter item with.
   * @returns The updated emailParameter item.
   * @throws NotFoundException if the emailParameter item with the specified ID is not found.
   */
  async handle(
    id: number,
    emailParameterUpdateDto: EmailParameterUpdateDto,
  ): Promise<EmailParameterResponseDto> {
    const exist = await this._findOneEmailParameter.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`EmailParameter with id ${id} not found`);
    }

    const emailParameterUpdatePayload = this._mapper.map(
      emailParameterUpdateDto,
      EmailParameterUpdateDto,
      EmailParameter,
    );

    const emailParameter = await this._emailParameterRepository.update(
      id,
      emailParameterUpdatePayload,
    );

    const response = this._mapper.map(
      emailParameter,
      EmailParameter,
      EmailParameterResponseDto,
    );

    return response;
  }
}
