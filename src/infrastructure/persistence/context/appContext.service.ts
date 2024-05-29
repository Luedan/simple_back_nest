/* istanbul ignore file */
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Request } from 'express';
import { InjectDataSource } from '@nestjs/typeorm';
import { GenericRepository } from '@app/common/classes/persistence/genericRepository';
import { AbstractRepository } from '@app/common/classes/persistence/abstractRepository';
import { Todo } from '@app/domain/todo/todo.entity';
import { AbstractContext } from '@app/common/classes/persistence/abstractContext';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { User } from '@app/domain/user/user.entity';

/**
 * App context
 * @description App context
 */
@Injectable()
export class AppContext implements AbstractContext {
  /**
   * Todo repository
   */
  todo: AbstractRepository<Todo>;

  /**
   * S3Parameter repository
   */
  s3Parameter: AbstractRepository<S3Parameter>;

  /**
   * EmailParameter repository
   */
  emailParameter: AbstractRepository<EmailParameter>;

  user: AbstractRepository<User>;

  constructor(
    @InjectDataSource('mili') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.todo = new GenericRepository(Todo, dataSource, request);

    this.s3Parameter = new GenericRepository(S3Parameter, dataSource, request);

    this.emailParameter = new GenericRepository(
      EmailParameter,
      dataSource,
      request,
    );

    this.user = new GenericRepository(User, dataSource, request);
  }
}
