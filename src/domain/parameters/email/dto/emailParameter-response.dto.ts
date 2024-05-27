import { AutoMap } from '@automapper/classes';

export class EmailParameterResponseDto {
  /**
   * The id of the Email parameter
   */
  @AutoMap()
  id: number;

  /**
   * The host of the Email parameter
   */
  @AutoMap()
  host: string;

  /**
   * The port of the Email parameter
   */
  @AutoMap()
  port: number;

  /**
   * The username of the Email parameter
   */
  @AutoMap()
  username: string;

  /**
   * The password of the Email parameter
   */
  @AutoMap()
  password: string;

  /**
   * The secure of the Email parameter
   */
  @AutoMap()
  secure: boolean;

  /**
   * The from of the Email parameter
   */
  @AutoMap()
  from: string;
}
