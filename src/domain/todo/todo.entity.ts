import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'todos',
})
export class Todo {
  /**
   * Todo id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Todo task
   */
  @Column()
  @AutoMap()
  task: string;

  /**
   * Todo status
   */
  @Column({
    type: 'enum',
    enum: ['todo', 'in-progress', 'completed'],
    default: 'todo',
  })
  @AutoMap()
  status: string;

  /**
   * Create todo date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update todo date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * Delete todo date
   */
  @DeleteDateColumn()
  @AutoMap()
  deletedAt?: Date;
}
