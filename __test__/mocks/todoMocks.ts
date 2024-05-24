import { TodoResponseDto } from '../../src/domain/todo/dto/todo-response.dto';
import { TodoRequestDto } from '../../src/domain/todo/dto/todo-request.dto';
import { TodoUpdateDto } from '../../src/domain/todo/dto/todo-update.dto';
import { Todo } from '../../src/domain/todo/todo.entity';

export const TodoMock: Todo = {
  id: 1,
  task: 'Test',
  status: 'todo',
};

export const TodoMockArray: Todo[] = [
  {
    id: 1,
    task: 'Test',
    status: 'todo',
  },
];

export const TodoResponseMock: TodoResponseDto = {
  id: 1,
  task: 'Test',
  status: 'todo',
};

export const TodoResponseMockArray: TodoResponseDto[] = [
  {
    id: 1,
    task: 'Test',
    status: 'todo',
  },
];

export const TodoRequestMock: TodoRequestDto = {
  id: 1,
  task: 'Test',
  status: 'todo',
};

export const TodoUpdateMock: TodoUpdateDto = {
  id: 1,
  task: 'Test',
  status: 'todo',
};
