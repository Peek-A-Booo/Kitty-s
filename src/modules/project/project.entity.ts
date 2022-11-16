import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn({ type: 'int', comment: '主键id' })
  id: number;

  @Column({ unique: true, length: 30, comment: '项目名称' })
  name: string;

  @Column({ length: 200, comment: '项目备注' })
  desc: string;

  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  cTime: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
  uTime: Date;
}
