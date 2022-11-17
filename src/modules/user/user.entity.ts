import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 定义用户类型
 * 1 为管理员
 * 2 为普通用户
 */
export enum UserType {
  ADMIN = 1,
  USER = 2,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int', comment: '用户主键id' })
  id: number;

  @Column({ length: 50, comment: '用户名' })
  username: string;

  @Column({ length: 50, comment: '用户昵称' })
  nick: string;

  @Column({ length: 50, comment: '用户密码' })
  password: string;

  @Column({
    type: 'int',
    comment: '用户类型。1是管理员,2是普通用户',
    default: UserType.USER,
  })
  type: UserType;

  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  cTime: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
  uTime: Date;
}
