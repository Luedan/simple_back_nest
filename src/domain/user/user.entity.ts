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
  name: 'users',
})
export class User {
  /**
   * User id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id?: number;

  /**
   * Email
   */
  @Column()
  @AutoMap()
  email: string;

  /**
   * Password
   */
  @Column()
  @AutoMap()
  password: string;

  /**
   * Create date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * Delete date
   */
  @DeleteDateColumn()
  @AutoMap()
  deletedAt?: Date;
}
