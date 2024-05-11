import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TodoRequestDto {
  /**
   * Todo id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * Todo task
   */
  @IsString()
  @AutoMap()
  task: string;

  /**
   * Todo status
   */
  @IsString()
  @AutoMap()
  @IsOptional()
  status: string;
}
