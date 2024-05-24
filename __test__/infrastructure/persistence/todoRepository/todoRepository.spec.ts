import { It, Mock } from 'moq.ts';
import { TodoRepository } from '../../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { AppContext } from '../../../../src/infrastructure/persistence/context/appContext.service';
import { TodoMock } from '__test__/mocks/todoMocks';

describe('TodoRepository', () => {
  let todoRepository: TodoRepository;

  // Mocks
  const appContext = new Mock<AppContext>();

  beforeEach(() => {
    todoRepository = new TodoRepository(appContext.object());
  });

  it('Create a new todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.create(It.IsAny()))
      .returns(Promise.resolve(TodoMock));
  });
});
