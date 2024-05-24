import { Mapper } from '@automapper/core';
import { UpdateTodo } from '../../../src/application/useCases/todo/updateTodo.service';
import { Mock, It } from 'moq.ts';
import { TodoRepository } from '../../../src/infrastructure/persistence/repositories/todo/todo.repository';
import { FindOneTodo } from '../../../src/application/useCases/todo/findOneTodo.service';
import { TodoUpdateDto } from '../../../src/domain/todo/dto/todo-update.dto';
import { Todo } from '../../../src/domain/todo/todo.entity';
import { TodoMock, TodoResponseMock } from '../../mocks/todoMocks';
import { TodoResponseDto } from '../../../src/domain/todo/dto/todo-response.dto';
import { NotFoundException } from '@nestjs/common';

describe('Update Todo', () => {
  let updateTodo: UpdateTodo;

  // Mocks
  const mapperMock = new Mock<Mapper>();
  const todoRepositoryMock = new Mock<TodoRepository>();
  const findOneMock = new Mock<FindOneTodo>();

  beforeEach(() => {
    updateTodo = new UpdateTodo(
      mapperMock.object(),
      todoRepositoryMock.object(),
      findOneMock.object(),
    );
  });

  it('should update a todo', async () => {
    // Arrange
    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), TodoUpdateDto, Todo))
      .returns(TodoMock);

    findOneMock
      .setup((findOne) => findOne.handle(It.IsAny()))
      .returns(Promise.resolve(TodoResponseMock));

    todoRepositoryMock
      .setup((todoRepository) => todoRepository.update(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve(TodoMock));

    mapperMock
      .setup((mapper) => mapper.map(It.IsAny(), Todo, TodoResponseDto))
      .returns(TodoResponseMock);
    // Act
    const result = await updateTodo.handle(It.IsAny(), It.IsAny());
    // Assert
    expect(result).toEqual(TodoResponseMock);
  });

  it('should throw an error if todo is not found', async () => {
    // Arrange
    findOneMock
      .setup((findOne) => findOne.handle(It.IsAny()))
      .returns(Promise.resolve(null));

    // Act & Assert
    await expect(updateTodo.handle(It.IsAny(), It.IsAny())).rejects.toThrow(
      NotFoundException,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
