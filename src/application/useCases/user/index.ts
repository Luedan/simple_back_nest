/* istanbul ignore file */
import { CreateUser } from './createUser.service';
import { DeleteUser } from './deleteUser.service';
import { FindAllUser } from './findAllUser.service';
import { FindOneUser } from './findOneUser.service';
import { UpdateUser } from './updateUser.service';

/**
 * Array of todo use cases.
 */
export const USER_USE_CASES = [
  CreateUser,
  UpdateUser,
  FindAllUser,
  FindOneUser,
  DeleteUser,
];
