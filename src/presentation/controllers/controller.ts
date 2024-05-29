import { DefaultController } from './default/default.controller';
import { HealthController } from './health/health.controller';
import { EmailParameterController } from './parameters/email/emailParameter.controller';
import { S3ParameterController } from './parameters/s3/s3Parameter.controller';
import { TodoController } from './todo/todo.controller';
import { UserController } from './user/user.controller';

/**
 * Array of controllers.
 */
export const CONTROLLERS = [
  DefaultController,
  HealthController,
  TodoController,
  S3ParameterController,
  EmailParameterController,
  UserController,
];
