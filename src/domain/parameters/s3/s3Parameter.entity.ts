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
 * The S3 parameter entity
 */
@Entity()
export class S3Parameter {
  /**
   * The id of the S3 parameter
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * The Bucket of the S3 parameter
   */
  @Column()
  @AutoMap()
  bucket: string;

  /**
   * The accessKeyId of the S3 parameter
   */
  @Column()
  @AutoMap()
  accessKeyId: string;

  /**
   * The secretAccessKey of the S3 parameter
   */
  @Column()
  @AutoMap()
  secretAccessKey: string;

  /**
   * The region of the S3 parameter
   */
  @Column()
  @AutoMap()
  region: string;

  /**
   * The endpoint of the S3 parameter
   */
  @Column({
    nullable: true,
  })
  @AutoMap()
  endpoint: string;

  /**
   * The url of the S3 parameter
   */
  @Column({
    nullable: true,
  })
  @AutoMap()
  url: string;

  /**
   * The createdAt of the S3 parameter
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  /**
   * The updatedAt of the S3 parameter
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;

  /**
   * The deletedAt of the S3 parameter
   */
  @DeleteDateColumn()
  @AutoMap()
  deletedAt: Date;
}
