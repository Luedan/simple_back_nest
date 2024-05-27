/* istanbul ignore file */
import { EmailParameterRepository } from './parameters/email/emailParameter.repository';
import { S3ParameterRepository } from './parameters/s3/s3Parameter.repository';
import { TodoRepository } from './todo/todo.repository';

/**
 * Repositories
 */
export const REPOSITORIES = [
  TodoRepository,
  S3ParameterRepository,
  EmailParameterRepository,
];
