/* istanbul ignore file */
import { EMAIL_PARAMETER_USE_CASES } from './parameters/email';
import { S3_PARAMETER_USE_CASES } from './parameters/s3';
import { TODO_USE_CASES } from './todo';
import { USER_USE_CASES } from './user';

export const USE_CASES = [
  ...TODO_USE_CASES,
  ...S3_PARAMETER_USE_CASES,
  ...EMAIL_PARAMETER_USE_CASES,
  ...USER_USE_CASES,
];
