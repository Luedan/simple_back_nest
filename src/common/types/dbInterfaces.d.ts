import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectId,
  SaveOptions,
} from 'typeorm';

/**
 * Representa un tipo de criterio para la actualización.
 */
export type UpdateCriteriaType<E> =
  | string
  | number
  | Date
  | string[]
  | number[]
  | Date[]
  | FindOptionsWhere<E>
  | ObjectId
  | ObjectId[];

/**
 * Representa un tipo de criterio para la eliminación.
 */
export type DeleteCriteriaType<E> = CriteriaType<E>;

/**
 * Representa un tipo de criterio para la obtención de múltiples entidades.
 */
export type GetAllCriteriaType<E> = FindManyOptions<E>;

/**
 * Representa un tipo de criterio para la obtención de una sola entidad.
 */
export type GetOneCriteriaType<E> = FindOneOptions<E>;

/**
 * Representa un tipo de criterio para la actualización.
 */
export type SaveOptionsType<E> = SaveOptions<E>;
