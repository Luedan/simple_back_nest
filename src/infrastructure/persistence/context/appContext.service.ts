/* istanbul ignore file */
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Request } from 'express';
import { AbstractRepository } from '@app/common/classes/abstractRepository';
import { GenericRepository } from '@app/common/classes/genericRepository';
import { Todo } from '@app/domain/todo/todo.entity';

/**
 * App context
 * @description App context
 */
@Injectable()
export class AppContext {
  /**
   * Todo repository
   */
  todo: AbstractRepository<Todo>;

  constructor(
    private dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.todo = new GenericRepository(Todo, dataSource, request);
  }
}
