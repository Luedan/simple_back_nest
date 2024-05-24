import { It, Mock } from 'moq.ts';
import { CreateTodo } from '@app/application/useCases/todo/createTodo.service';
import { TodoController } from '../../../src/presentation/controllers/todo/todo.controller';
import { FindAllTodo } from '../../../src/application/useCases/todo/findAllTodo.service';
import { FindOneTodo } from '../../../src/application/useCases/todo/findOneTodo.service';
import { UpdateTodo } from '../../../src/application/useCases/todo/updateTodo.service';
import { DeleteTodo } from '../../../src/application/useCases/todo/deleteTodo.service';
import { TodoResponseMock } from '../../mocks/todoMocks';

describe('TodoController', () => {
  let todoController: TodoController;

  // Mocks
  const createTodo = new Mock<CreateTodo>();
  const findAllTodo = new Mock<FindAllTodo>();
  const findOneTodo = new Mock<FindOneTodo>();
  const updateTodo = new Mock<UpdateTodo>();
  const deleteTodo = new Mock<DeleteTodo>();

  beforeEach(async () => {
    todoController = new TodoController(
      createTodo.object(),
      updateTodo.object(),
      findAllTodo.object(),
      findOneTodo.object(),
      deleteTodo.object(),
    );
  });

  it('Create Todo', async () => {
    // Arrange
    createTodo
      .setup((i) => i.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.create(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('Find All Todo', async () => {
    // Arrange
    findAllTodo
      .setup((i) => i.handle())
      .returns(Promise.resolve([TodoResponseMock]));

    // Act
    const result = await todoController.findAll();

    // Assert
    expect(result).toEqual([TodoResponseMock]);
  });

  it('Find One Todo', async () => {
    // Arrange
    findOneTodo
      .setup((i) => i.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.findOne(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('Update Todo', async () => {
    // Arrange
    updateTodo
      .setup((i) => i.handle(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.update(It.IsAny(), It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('Delete Todo', async () => {
    // Arrange
    deleteTodo
      .setup((i) => i.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    // Act
    const result = await todoController.delete(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
