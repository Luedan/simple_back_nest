import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindOneEmailParameterInterface } from '@app/domain/interfaces/application/parameters/email/findOneEmailParameter.interface';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { EmailParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/email/emailParameter.repository';

/**
 * Service class for finding a emailParameter by its ID.
 */
@Injectable()
export class FindOneEmailParameter implements FindOneEmailParameterInterface {
  /**
   * Constructs a new instance of the FindOneEmailParameterService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _emailParameterRepository - The repository for accessing emailParameter data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _emailParameterRepository: EmailParameterRepository,
  ) {}

  /**
   * Retrieves a emailParameter by its ID.
   *
   * @param id - The ID of the emailParameter to retrieve.
   * @returns A Promise that resolves to a EmailParameterResponseDto object representing the retrieved emailParameter.
   */
  async handle(id: number): Promise<EmailParameterResponseDto> {
    const emailParameter = await this._emailParameterRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      emailParameter,
      EmailParameter,
      EmailParameterResponseDto,
    );

    return response;
  }
}
