/* istanbul ignore file */
import { CreateEmailParameter } from './createEmailParameter.service';
import { DeleteEmailParameter } from './deleteEmailParameter.service';
import { FindAllEmailParameter } from './findAllEmailParameter.service';
import { FindOneEmailParameter } from './findOneEmailParameter.service';
import { UpdateEmailParameter } from './updateEmailParameter.service';

/**
 * Array of emailParameter use cases.
 */
export const EMAIL_PARAMETER_USE_CASES = [
  CreateEmailParameter,
  DeleteEmailParameter,
  FindAllEmailParameter,
  FindOneEmailParameter,
  UpdateEmailParameter,
];
