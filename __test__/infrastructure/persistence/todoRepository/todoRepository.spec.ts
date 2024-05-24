import { It, Mock } from 'moq.ts';
import { TodoRepository } from '../../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { AppContext } from '../../../../src/infrastructure/persistence/context/appContext.service';
import { TodoMock, TodoMockArray } from '../../../mocks/todoMocks';
import {
  ErrorWithoutStatus,
  FakeInsertResult,
  FakeUpdateResult,
} from '../../../mocks/resultsMocks';
import { HttpException } from '@nestjs/common';

describe('TodoRepository', () => {
  let todoRepository: TodoRepository;

  // Mocks
  const appContext = new Mock<AppContext>();

  beforeEach(() => {
    todoRepository = new TodoRepository(appContext.object());
  });

  // Success cases

  it('Create a new todo', async () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.create(It.IsAny()))
      .returns(Promise.resolve(FakeInsertResult(TodoMock)));

    // Act
    const result = todoRepository.create(TodoMock);

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Get all todos', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getAll(It.IsAny()))
      .returns(Promise.resolve(TodoMockArray));

    // Act
    const result = todoRepository.getAll(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMockArray);
  });

  it('Get todo by id', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getOne(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    // Act
    const result = todoRepository.findBy(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Update a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.update(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(FakeUpdateResult(TodoMock)));

    // Act
    const result = todoRepository.update(It.IsAny(), TodoMock);

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Delete a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.delete(It.IsAny()))
      .returns(Promise.resolve(FakeUpdateResult(TodoMock)));

    // Act
    const result = todoRepository.delete(It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  it('Save a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.save(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    // Act
    const result = todoRepository.save(It.IsAny(), It.IsAny());

    // Assert
    expect(result).resolves.toEqual(TodoMock);
  });

  // Error cases
  it('Should throw an error when trying to create a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.create(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.create(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to get all todos', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getAll(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.getAll(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to get a todo by id', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.getOne(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.findBy(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to update a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.update(It.IsAny(), It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.update(It.IsAny(), TodoMock);

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to delete a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.delete(It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.delete(It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  it('Should throw an error when trying to save a todo', () => {
    // Arrange
    appContext
      .setup((appContext) => appContext.todo.save(It.IsAny(), It.IsAny()))
      .throws(ErrorWithoutStatus);

    // Act
    const result = todoRepository.save(It.IsAny(), It.IsAny());

    // Assert
    expect(result).rejects.toThrow(
      new HttpException('Error de DB: Error', 500),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
