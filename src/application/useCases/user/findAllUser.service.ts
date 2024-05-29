import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindAllUserInterface } from '@app/domain/interfaces/application/user/findAllUser.interface';
import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';
import { User } from '@app/domain/user/user.entity';
import { UserRepository } from '@app/infrastructure/persistence/repositories/user/user.repository';

/**
 * Service class for finding all users.
 */
@Injectable()
export class FindAllUser implements FindAllUserInterface {
  /**
   * Constructs a new instance of the `FindAllUserService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing user data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handles the finding of all users.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */
  async handle(): Promise<UserResponseDto[]> {
    const users = await this._userRepository.getAll();

    const response = this._mapper.mapArray(users, User, UserResponseDto);

    return response;
  }
}
