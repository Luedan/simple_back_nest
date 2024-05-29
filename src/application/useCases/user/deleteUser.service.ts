import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';
import { User } from '@app/domain/user/user.entity';
import { UserRepository } from '@app/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a user.
 */
@Injectable()
export class DeleteUser {
  /**
   * Constructs a new instance of the DeleteUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for accessing user data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handles the deletion of a user item.
   *
   * @param id - The ID of the user item to be deleted.
   * @returns A promise that resolves to a UserResponseDto representing the deleted user item.
   */
  async handle(id: number): Promise<UserResponseDto> {
    const user = await this._userRepository.delete({
      id,
    });

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
