import { HttpException, Injectable, Scope } from '@nestjs/common';
import { AppContext } from '../../../context/appContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { S3ParameterRepositoryInterface } from '@app/domain/interfaces/infrastructure/persistence/parameters/s3/s3ParameterRepository.interface';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';

/**
 * Represents a S3Parameter repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class S3ParameterRepository implements S3ParameterRepositoryInterface {
  constructor(private readonly _context: AppContext) {}

  /**
   * Retrieves all s3Parameters from the database.
   * @param options - Optional criteria to filter the s3Parameters.
   * @returns A promise that resolves to an array of s3Parameters.
   * @throws HttpException if there's an error retrieving the s3Parameters from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<S3Parameter>,
  ): Promise<S3Parameter[]> {
    try {
      return await this._context.s3Parameter.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new s3Parameter in the database.
   * @param s3Parameter - The s3Parameter object to create.
   * @returns A promise that resolves to the created s3Parameter.
   * @throws HttpException if there's an error creating the s3Parameter in the database.
   */
  async create(s3Parameter: S3Parameter): Promise<S3Parameter> {
    try {
      const userData = await this._context.s3Parameter.create(s3Parameter);
      return {
        ...s3Parameter,
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
   * Find a s3Parameter by the provided criteria in the database.
   * @param options - The criteria to find the s3Parameter.
   * @returns A promise that resolves to the found s3Parameter.
   * @throws HttpException if there's an error finding the s3Parameter in the database.
   */
  async findBy(options: GetOneCriteriaType<S3Parameter>): Promise<S3Parameter> {
    try {
      return await this._context.s3Parameter.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a s3Parameter in the database.
   * @param criteria - The criteria to find the s3Parameter to update.
   * @param s3Parameter - The updated s3Parameter object.
   * @returns A promise that resolves to the updated s3Parameter.
   * @throws HttpException if there's an error updating the s3Parameter in the database.
   */
  async update(
    criteria: UpdateCriteriaType<S3Parameter>,
    s3Parameter: S3Parameter,
  ): Promise<S3Parameter> {
    try {
      const updateS3Parameter = await this._context.s3Parameter.update(
        criteria,
        s3Parameter,
      );
      return {
        ...s3Parameter,
        ...updateS3Parameter?.raw[0],
        ...updateS3Parameter?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a s3Parameter from the database.
   * @param criteria - The criteria to find the s3Parameter to delete.
   * @returns A promise that resolves to the deleted s3Parameter.
   * @throws HttpException if there's an error deleting the s3Parameter from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<S3Parameter>,
  ): Promise<S3Parameter> {
    try {
      const deleteS3Parameter =
        await this._context.s3Parameter.delete(criteria);
      return { ...deleteS3Parameter?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a s3Parameter in the database.
   * @param s3Parameter - The s3Parameter object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved s3Parameter.
   * @throws HttpException if there's an error saving the s3Parameter in the database.
   */
  async save(
    s3Parameter: S3Parameter,
    options?: SaveOptionsType<S3Parameter>,
  ): Promise<S3Parameter> {
    try {
      const userSaved = await this._context.s3Parameter.save(
        s3Parameter,
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
