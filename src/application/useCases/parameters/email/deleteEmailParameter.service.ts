import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { EmailParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/email/emailParameter.repository';

/**
 * Service class for deleting a emailParameter.
 */
@Injectable()
export class DeleteEmailParameter {
  /**
   * Constructs a new instance of the DeleteEmailParameterService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _emailParameterRepository - The repository for accessing emailParameter data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _emailParameterRepository: EmailParameterRepository,
  ) {}

  /**
   * Handles the deletion of a emailParameter item.
   *
   * @param id - The ID of the emailParameter item to be deleted.
   * @returns A promise that resolves to a EmailParameterResponseDto representing the deleted emailParameter item.
   */
  async handle(id: number): Promise<EmailParameterResponseDto> {
    const emailParameter = await this._emailParameterRepository.delete({
      id,
    });

    const response = this._mapper.map(
      emailParameter,
      EmailParameter,
      EmailParameterResponseDto,
    );

    return response;
  }
}
