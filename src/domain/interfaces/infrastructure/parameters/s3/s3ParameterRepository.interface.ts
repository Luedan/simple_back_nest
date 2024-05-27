import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';

/**
 * Represents the interface for a S3Parameter repository.
 */
export interface S3ParameterRepositoryInterface {
  /**
   * Retrieves all S3Parameters based on the provided options.
   * @param options - The criteria to filter the S3Parameters.
   * @returns A promise that resolves to an array of S3Parameters.
   */
  getAll(options?: GetAllCriteriaType<S3Parameter>): Promise<S3Parameter[]>;

  /**
   * Creates a new S3Parameter.
   * @param s3Parameter - The S3Parameter object to create.
   * @returns A promise that resolves to the created S3Parameter.
   */
  create(s3Parameter: S3Parameter): Promise<S3Parameter>;

  /**
   * Finds a S3Parameter by the provided criteria.
   * @param options - The criteria to find the S3Parameter.
   * @returns A promise that resolves to the found S3Parameter.
   */
  findBy(options: GetOneCriteriaType<S3Parameter>): Promise<S3Parameter>;

  /**
   * Updates a S3Parameter based on the provided criteria.
   * @param criteria - The criteria to update the S3Parameter.
   * @param s3Parameter - The updated S3Parameter object.
   * @returns A promise that resolves to the updated S3Parameter.
   */
  update(
    criteria: UpdateCriteriaType<S3Parameter>,
    s3Parameter: S3Parameter,
  ): Promise<S3Parameter>;

  /**
   * Deletes a S3Parameter based on the provided criteria.
   * @param criteria - The criteria to delete the S3Parameter.
   * @returns A promise that resolves to a boolean indicating if the S3Parameter was deleted successfully.
   */
  delete(criteria: DeleteCriteriaType<S3Parameter>): Promise<S3Parameter>;

  /**
   * Saves a S3Parameter.
   * @param s3Parameter - The S3Parameter object to save.
   * @param options - The options for saving the S3Parameter.
   * @returns A promise that resolves to the saved S3Parameter.
   */
  save(
    s3Parameter: S3Parameter,
    options?: SaveOptionsType<S3Parameter>,
  ): Promise<S3Parameter>;
}
