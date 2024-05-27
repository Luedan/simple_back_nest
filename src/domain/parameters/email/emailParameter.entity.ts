import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * The Email parameter entity
 */
@Entity()
export class EmailParameter {
  /**
   * The id of the Email parameter
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * The host of the Email parameter
   */
  @Column()
  @AutoMap()
  host: string;

  /**
   * The port of the Email parameter
   */
  @Column()
  @AutoMap()
  port: number;

  /**
   * The username of the Email parameter
   */
  @Column()
  @AutoMap()
  username: string;

  /**
   * The password of the Email parameter
   */
  @Column()
  @AutoMap()
  password: string;

  /**
   * The secure of the Email parameter
   */
  @Column()
  @AutoMap()
  secure: boolean;

  /**
   * The from of the Email parameter
   */
  @Column()
  @AutoMap()
  from: string;

  /**
   * The createdAt of the Email parameter
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  /**
   * The updatedAt of the Email parameter
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;

  /**
   * The deletedAt of the Email parameter
   */
  @DeleteDateColumn()
  @AutoMap()
  deletedAt: Date;
}
