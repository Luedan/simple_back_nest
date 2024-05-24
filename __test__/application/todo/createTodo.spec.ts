import { Mapper } from '@automapper/core';
import { CreateTodo } from '../../../src/application/useCases/todo/createTodo.service';
import { It, Mock } from 'moq.ts';
import { TodoRepository } from '../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { TodoRequestDto } from '../../../src/domain/todo/dto/todo-request.dto';
import { Todo } from '../../../src/domain/todo/todo.entity';
import { TodoRequestMock, TodoResponseMock } from '../../mocks/todoMocks';
import { TodoResponseDto } from '../../../src/domain/todo/dto/todo-response.dto';

describe('Create Todo', () => {
  let createTodo: CreateTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();

  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    createTodo = new CreateTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should create a todo', async () => {
    // Arrange
    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), TodoRequestDto, Todo))
      .returns(TodoRequestMock);

    todoRepositoryMock
      .setup((todoRepository) => todoRepository.create(It.IsAny()))
      .returns(Promise.resolve(TodoRequestMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);

    // Act
    const result = await createTodo.handle(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
