import { HttpException, Injectable, Scope } from '@nestjs/common';
import { AppContext } from '../../../context/appContext.service';
import { EmailParameterRepositoryInterface } from '@app/domain/interfaces/infrastructure/parameters/email/emailParameterRepository.interface';
import {
  GetAllCriteriaType,
  GetOneCriteriaType,
  UpdateCriteriaType,
  DeleteCriteriaType,
  SaveOptionsType,
} from '@app/common/types/dbInterfaces';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';

/**
 * Represents a EmailParameter repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class EmailParameterRepository
  implements EmailParameterRepositoryInterface
{
  constructor(private readonly _context: AppContext) {}

  /**
   * Retrieves all emailParameters from the database.
   * @param options - Optional criteria to filter the emailParameters.
   * @returns A promise that resolves to an array of emailParameters.
   * @throws HttpException if there's an error retrieving the emailParameters from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<EmailParameter>,
  ): Promise<EmailParameter[]> {
    try {
      return await this._context.emailParameter.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new emailParameter in the database.
   * @param emailParameter - The emailParameter object to create.
   * @returns A promise that resolves to the created emailParameter.
   * @throws HttpException if there's an error creating the emailParameter in the database.
   */
  async create(emailParameter: EmailParameter): Promise<EmailParameter> {
    try {
      const userData =
        await this._context.emailParameter.create(emailParameter);
      return {
        ...emailParameter,
        ...userData?.raw[0],
        ...userData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a emailParameter by the provided criteria in the database.
   * @param options - The criteria to find the emailParameter.
   * @returns A promise that resolves to the found emailParameter.
   * @throws HttpException if there's an error finding the emailParameter in the database.
   */
  async findBy(
    options: GetOneCriteriaType<EmailParameter>,
  ): Promise<EmailParameter> {
    try {
      return await this._context.emailParameter.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a emailParameter in the database.
   * @param criteria - The criteria to find the emailParameter to update.
   * @param emailParameter - The updated emailParameter object.
   * @returns A promise that resolves to the updated emailParameter.
   * @throws HttpException if there's an error updating the emailParameter in the database.
   */
  async update(
    criteria: UpdateCriteriaType<EmailParameter>,
    emailParameter: EmailParameter,
  ): Promise<EmailParameter> {
    try {
      const updateEmailParameter = await this._context.emailParameter.update(
        criteria,
        emailParameter,
      );
      return {
        ...emailParameter,
        ...updateEmailParameter?.raw[0],
        ...updateEmailParameter?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a emailParameter from the database.
   * @param criteria - The criteria to find the emailParameter to delete.
   * @returns A promise that resolves to the deleted emailParameter.
   * @throws HttpException if there's an error deleting the emailParameter from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<EmailParameter>,
  ): Promise<EmailParameter> {
    try {
      const deleteEmailParameter =
        await this._context.emailParameter.delete(criteria);
      return { ...deleteEmailParameter?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a emailParameter in the database.
   * @param emailParameter - The emailParameter object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved emailParameter.
   * @throws HttpException if there's an error saving the emailParameter in the database.
   */
  async save(
    emailParameter: EmailParameter,
    options?: SaveOptionsType<EmailParameter>,
  ): Promise<EmailParameter> {
    try {
      const userSaved = await this._context.emailParameter.save(
        emailParameter,
        options,
      );
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
