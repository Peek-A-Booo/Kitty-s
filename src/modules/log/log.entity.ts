import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn({ type: 'int', comment: '日志主键id' })
  id: number;

  @Column({ type: 'int', comment: '对应父project的id' })
  pid: number;

  @Column({ type: 'int', comment: '对应父group的id' })
  gid: number;

  @Column({ type: 'varchar', length: 15000, comment: '日志内容' })
  content: string;

  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  cTime: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
  uTime: Date;
}
