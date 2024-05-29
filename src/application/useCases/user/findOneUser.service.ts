import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { FindOneUserInterface } from '@app/domain/interfaces/application/user/findOneUser.interface';
import { UserRepository } from '@app/infrastructure/persistence/repositories/user/user.repository';
import { User } from '@app/domain/user/user.entity';
import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';

/**
 * Service class for finding a user by its ID.
 */
@Injectable()
export class FindOneUser implements FindOneUserInterface {
  /**
   * Constructs a new instance of the FindOneUserService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing user data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Retrieves a user by its ID.
   *
   * @param id - The ID of the user to retrieve.
   * @returns A Promise that resolves to a UserResponseDto object representing the retrieved user.
   */
  async handle(id: number): Promise<UserResponseDto> {
    const user = await this._userRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
