import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';

/**
 * Represents the interface for a EmailParameter repository.
 */
export interface EmailParameterRepositoryInterface {
  /**
   * Retrieves all EmailParameters based on the provided options.
   * @param options - The criteria to filter the EmailParameters.
   * @returns A promise that resolves to an array of EmailParameters.
   */
  getAll(
    options?: GetAllCriteriaType<EmailParameter>,
  ): Promise<EmailParameter[]>;

  /**
   * Creates a new EmailParameter.
   * @param emailParameter - The EmailParameter object to create.
   * @returns A promise that resolves to the created EmailParameter.
   */
  create(emailParameter: EmailParameter): Promise<EmailParameter>;

  /**
   * Finds a EmailParameter by the provided criteria.
   * @param options - The criteria to find the EmailParameter.
   * @returns A promise that resolves to the found EmailParameter.
   */
  findBy(options: GetOneCriteriaType<EmailParameter>): Promise<EmailParameter>;

  /**
   * Updates a EmailParameter based on the provided criteria.
   * @param criteria - The criteria to update the EmailParameter.
   * @param emailParameter - The updated EmailParameter object.
   * @returns A promise that resolves to the updated EmailParameter.
   */
  update(
    criteria: UpdateCriteriaType<EmailParameter>,
    emailParameter: EmailParameter,
  ): Promise<EmailParameter>;

  /**
   * Deletes a EmailParameter based on the provided criteria.
   * @param criteria - The criteria to delete the EmailParameter.
   * @returns A promise that resolves to a boolean indicating if the EmailParameter was deleted successfully.
   */
  delete(criteria: DeleteCriteriaType<EmailParameter>): Promise<EmailParameter>;

  /**
   * Saves a EmailParameter.
   * @param emailParameter - The EmailParameter object to save.
   * @param options - The options for saving the EmailParameter.
   * @returns A promise that resolves to the saved EmailParameter.
   */
  save(
    emailParameter: EmailParameter,
    options?: SaveOptionsType<EmailParameter>,
  ): Promise<EmailParameter>;
}
