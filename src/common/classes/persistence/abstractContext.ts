import { AbstractRepository } from './abstractRepository';
/**
 * Entities
 */
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { Todo } from '@app/domain/todo/todo.entity';
import { User } from '@app/domain/user/user.entity';

/**
 * Represents an abstract context.
 */
export abstract class AbstractContext {
  /**
   * Todo repository
   */
  abstract todo: AbstractRepository<Todo>;

  /**
   * S3Parameter repository
   */
  abstract s3Parameter: AbstractRepository<S3Parameter>;

  /**
   * EmailParameter repository
   */
  abstract emailParameter: AbstractRepository<EmailParameter>;

  /**
   * User repository
   */
  abstract user: AbstractRepository<User>;
}
