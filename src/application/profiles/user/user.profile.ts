/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { User } from '@app/domain/user/user.entity';
import { UserResponseDto } from '@app/domain/user/dto/user-response.dto';
import { UserRequestDto } from '@app/domain/user/dto/user-request.dto';
import { UserUpdateDto } from '@app/domain/user/dto/user-update.dto';

/**
 * User profile
 */
@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, User, UserResponseDto);
      createMap(mapper, UserRequestDto, User);
      createMap(mapper, UserUpdateDto, User);
    };
  }
}
