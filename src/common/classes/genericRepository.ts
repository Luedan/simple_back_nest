/* istanbul ignore file */
import {
  InsertResult,
  UpdateResult,
  ObjectLiteral,
  DataSource,
  FindManyOptions,
  Repository,
} from 'typeorm';
import { Request } from 'express';
import { BaseRepository } from './baseRepository';
import {
  GetAllCriteriaType,
  GetOneCriteriaType,
  UpdateCriteriaType,
  DeleteCriteriaType,
  SaveOptionsType,
} from '../types/dbInterfaces';
import { AbstractRepository } from './abstractRepository';

/* istanbul ignore next */
export class GenericRepository<E extends ObjectLiteral>
  extends BaseRepository
  implements AbstractRepository<E>
{
  /**
   * Constructor for the generic repository
   */
  constructor(
    private entity: new () => E,
    instance: DataSource,
    request: Request,
  ) {
    super(instance, request);
  }

  /**
   * Method to retrieve all records of an entity
   * @param options - The search options.
   * @returns A promise that resolves to an array of entities.
   */
  public async getAll(options?: GetAllCriteriaType<E>): Promise<E[]> {
    const response = await this.getRepository(this.entity).find(options);

    return response;
  }

  /**
   * Method to retrieve all records of an entity in a paginated manner
   * @param options - The search options.
   * @returns A promise that resolves to an array of entities and the total count.
   */
  public async getAllPaginated(
    options?: FindManyOptions<E>,
  ): Promise<[E[], number]> {
    const response = await this.getRepository(this.entity).findAndCount(
      options,
    );

    return response;
  }

  /**
   * Method to retrieve a record of an entity
   * @param options - The search options.
   * @returns A promise that resolves to the found entity or null if not found.
   */
  public async getOne(options: GetOneCriteriaType<E>): Promise<E | null> {
    const response = await this.getRepository(this.entity).findOne(options);

    return response;
  }

  /**
   * Method to create a record of an entity
   * @param entity - The entity to create.
   * @returns A promise that resolves to the insertion result.
   */
  public async create(entity: E): Promise<InsertResult> {
    const response = await this.getRepository(this.entity).insert({
      ...entity,
    });

    return response;
  }

  /**
   * Method to update a record of an entity
   * @param criteria - The criteria to match entities.
   * @param partialEntity - The partial entity with updated values.
   * @returns A promise that resolves to the update result.
   */
  public async update(
    criteria: UpdateCriteriaType<E>,
    partialEntity: E,
  ): Promise<UpdateResult> {
    const response = await this.getRepository(this.entity).update(criteria, {
      ...partialEntity,
    });
    return response;
  }

  /**
   * Method to delete a record of an entity
   * @param criteria - The criteria to match entities.
   * @returns A promise that resolves to the update result.
   */
  public async delete(criteria: DeleteCriteriaType<E>): Promise<UpdateResult> {
    const response = await this.getRepository(this.entity).softDelete(criteria);

    return response;
  }

  /**
   * Method to save a record of an entity
   * @param entity - The entity to save.
   * @param options - The save options.
   * @returns A promise that resolves to the saved entity.
   */
  public async save(entity: E, options?: SaveOptionsType<E>): Promise<E> {
    const response = await this.getRepository(this.entity).save(
      entity,
      options,
    );

    return response;
  }

  /**
   * Method to get the repository of the entity
   * @returns The repository of the entity
   */
  public getTypeOrmRepository(): Repository<E> {
    return this.getRepository(this.entity);
  }
}
