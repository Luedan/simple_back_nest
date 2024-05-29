import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { User } from '@app/domain/user/user.entity';

/**
 * Represents the interface for a User repository.
 */
export interface UserRepositoryInterface {
  /**
   * Retrieves all Users based on the provided options.
   * @param options - The criteria to filter the Users.
   * @returns A promise that resolves to an array of Users.
   */
  getAll(options?: GetAllCriteriaType<User>): Promise<User[]>;

  /**
   * Creates a new User.
   * @param user - The User object to create.
   * @returns A promise that resolves to the created User.
   */
  create(user: User): Promise<User>;

  /**
   * Finds a User by the provided criteria.
   * @param options - The criteria to find the User.
   * @returns A promise that resolves to the found User.
   */
  findBy(options: GetOneCriteriaType<User>): Promise<User>;

  /**
   * Updates a User based on the provided criteria.
   * @param criteria - The criteria to update the User.
   * @param user - The updated User object.
   * @returns A promise that resolves to the updated User.
   */
  update(criteria: UpdateCriteriaType<User>, user: User): Promise<User>;

  /**
   * Deletes a User based on the provided criteria.
   * @param criteria - The criteria to delete the User.
   * @returns A promise that resolves to a boolean indicating if the User was deleted successfully.
   */
  delete(criteria: DeleteCriteriaType<User>): Promise<User>;

  /**
   * Saves a User.
   * @param user - The User object to save.
   * @param options - The options for saving the User.
   * @returns A promise that resolves to the saved User.
   */
  save(user: User, options?: SaveOptionsType<User>): Promise<User>;
}
