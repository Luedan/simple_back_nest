import { AutoMap } from '@automapper/classes';

export class UserResponseDto {
  /**
   * User id
   */
  @AutoMap()
  id?: number;

  /**
   * Email
   */
  @AutoMap()
  email: string;
}
