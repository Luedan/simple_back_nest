import { AutoMap } from '@automapper/classes';

export class TodoResponseDto {
  /**
   * Todo id
   */
  @AutoMap()
  id: number;

  /**
   * Todo task
   */
  @AutoMap()
  task: string;

  /**
   * Todo status
   */
  @AutoMap()
  status: string;
}
