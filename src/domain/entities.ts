/* istanbul ignore file */
import { Todo } from './todo/todo.entity';
import { EmailParameter } from './parameters/email/emailParameter.entity';
import { S3Parameter } from './parameters/s3/s3Parameter.entity';

export const ENTITIES = [EmailParameter, S3Parameter, Todo];
