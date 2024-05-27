/* istanbul ignore file */
import { EmailParameterProfile } from './parameters/email/EmailParameter.profile';
import { S3ParameterProfile } from './parameters/s3/s3Parameter.profile';
import { TodoProfile } from './todo/todo.profile';

/**
 * Application profiles
 */
export const PROFILES = [
  TodoProfile,
  S3ParameterProfile,
  EmailParameterProfile,
];
