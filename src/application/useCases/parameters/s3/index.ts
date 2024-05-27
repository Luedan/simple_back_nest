/* istanbul ignore file */
import { CreateS3Parameter } from './createS3Parameter.service';
import { DeleteS3Parameter } from './deleteS3Parameter.service';
import { FindAllS3Parameter } from './findAllS3Parameter.service';
import { FindOneS3Parameter } from './findOneS3Parameter.service';
import { UpdateS3Parameter } from './updateS3Parameter.service';

/**
 * Array of s3Parameter use cases.
 */
export const S3_PARAMETER_USE_CASES = [
  CreateS3Parameter,
  DeleteS3Parameter,
  FindAllS3Parameter,
  FindOneS3Parameter,
  UpdateS3Parameter,
];
