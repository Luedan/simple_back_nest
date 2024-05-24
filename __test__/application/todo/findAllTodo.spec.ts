import { Mock } from 'moq.ts';
import { Mapper } from '@automapper/core';
import { TodoRepository } from '../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { FindAllTodo } from '../../../src/application/useCases/todo/findAllTodo.service';
import { TodoMockArray, TodoResponseMockArray } from '../../mocks/todoMocks';
import { TodoResponseDto } from '@app/domain/todo/dto/todo-response.dto';
import { Todo } from '../../../src/domain/todo/todo.entity';

describe('Find All Todo', () => {
  let findAllTodo: FindAllTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    findAllTodo = new FindAllTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should return all todos', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.getAll())
      .returns(Promise.resolve(TodoMockArray));

    mapperMock
      .setup((mapper) => mapper.mapArray(TodoMockArray, Todo, TodoResponseDto))
      .returns(TodoResponseMockArray);

    // Act
    const result = await findAllTodo.handle();

    // Assert
    expect(result).toEqual(TodoResponseMockArray);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
