import { It, Mock } from 'moq.ts';
import { Mapper } from '@automapper/core';
import { DeleteTodo } from '../../../src/application/useCases/todo/deleteTodo.service';
import { TodoRepository } from '../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { TodoMock, TodoResponseMock } from '../../mocks/todoMocks';
import { Todo } from '../../../src/domain/todo/todo.entity';
import { TodoResponseDto } from '../../../src/domain/todo/dto/todo-response.dto';

describe('Delete Todo', () => {
  let deleteTodo: DeleteTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();

  beforeEach(() => {
    deleteTodo = new DeleteTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
    );
  });

  it('should delete a todo', async () => {
    // Arrange
    todoRepositoryMock
      .setup((todoRepository) => todoRepository.delete(It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);

    // Act
    const result = await deleteTodo.handle(It.IsAny());

    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
