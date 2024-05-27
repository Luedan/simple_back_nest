/* istanbul ignore file */
import { ENTITY_MANAGER_KEY } from '@app/common/interceptors/transaction.interceptor';
import { Request } from 'express';
import { DataSource, EntityManager, Repository } from 'typeorm';

/* istanbul ignore next */
export class BaseRepository {
  constructor(
    private dataSource: DataSource,
    private request: Request,
  ) {}

  protected getRepository<T>(entityCls: new () => T): Repository<T> {
    const entityManager: EntityManager =
      this.request[ENTITY_MANAGER_KEY] ?? this.dataSource.manager;
    return entityManager.getRepository(entityCls);
  }
}
