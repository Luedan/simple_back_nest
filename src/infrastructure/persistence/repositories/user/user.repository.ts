import { HttpException, Injectable, Scope } from '@nestjs/common';
import { User } from '@app/domain/user/user.entity';
import { AppContext } from '../../context/appContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/common/types/dbInterfaces';
import { UserRepositoryInterface } from '@app/domain/interfaces/infrastructure/persistence/user/userRepository.interface';

/**
 * Represents a User repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly _context: AppContext) {}

  /**
   * Retrieves all users from the database.
   * @param options - Optional criteria to filter the users.
   * @returns A promise that resolves to an array of users.
   * @throws HttpException if there's an error retrieving the users from the database.
   */
  async getAll(options?: GetAllCriteriaType<User>): Promise<User[]> {
    try {
      return await this._context.user.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new user in the database.
   * @param user - The user object to create.
   * @returns A promise that resolves to the created user.
   * @throws HttpException if there's an error creating the user in the database.
   */
  async create(user: User): Promise<User> {
    try {
      const userData = await this._context.user.create(user);
      return { ...user, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a user by the provided criteria in the database.
   * @param options - The criteria to find the user.
   * @returns A promise that resolves to the found user.
   * @throws HttpException if there's an error finding the user in the database.
   */
  async findBy(options: GetOneCriteriaType<User>): Promise<User> {
    try {
      return await this._context.user.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a user in the database.
   * @param criteria - The criteria to find the user to update.
   * @param user - The updated user object.
   * @returns A promise that resolves to the updated user.
   * @throws HttpException if there's an error updating the user in the database.
   */
  async update(criteria: UpdateCriteriaType<User>, user: User): Promise<User> {
    try {
      const updateUser = await this._context.user.update(criteria, user);
      return {
        ...user,
        ...updateUser?.raw[0],
        ...updateUser?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a user from the database.
   * @param criteria - The criteria to find the user to delete.
   * @returns A promise that resolves to the deleted user.
   * @throws HttpException if there's an error deleting the user from the database.
   */
  async delete(criteria: DeleteCriteriaType<User>): Promise<User> {
    try {
      const deleteUser = await this._context.user.delete(criteria);
      return { ...deleteUser?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a user in the database.
   * @param user - The user object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved user.
   * @throws HttpException if there's an error saving the user in the database.
   */
  async save(user: User, options?: SaveOptionsType<User>): Promise<User> {
    try {
      const userSaved = await this._context.user.save(user, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
