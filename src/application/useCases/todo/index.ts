/* istanbul ignore file */
import { CreateTodo } from './createTodo.service';
import { DeleteTodo } from './deleteTodo.service';
import { FindAllTodo } from './findAllTodo.service';
import { FindOneTodo } from './findOneTodo.service';
import { UpdateTodo } from './updateTodo.service';

/**
 * Array of todo services.
 */
export const TODO_SERVICES = [
  CreateTodo,
  UpdateTodo,
  FindAllTodo,
  FindOneTodo,
  DeleteTodo,
];
