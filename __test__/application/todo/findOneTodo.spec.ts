import { Mapper } from '@automapper/core';
import { It, Mock } from 'moq.ts';
import { FindOneTodo } from '../../../src/application/useCases/todo/findOneTodo.service';
import { TodoRepository } from '../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { Todo } from '@app/domain/todo/todo.entity';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { TodoMock, TodoResponseMock } from '../../mocks/todoMocks';

describe('Find One Todo', () => {
  let findOneTodo: FindOneTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    findOneTodo = new FindOneTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should return a todo', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.findTodoById(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);

    // Act
    const result = await findOneTodo.handle(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
