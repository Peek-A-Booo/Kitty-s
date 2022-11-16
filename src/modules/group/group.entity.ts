import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn({ type: 'int', comment: '子分类主键id' })
  id: number;

  @Column({ type: 'int', comment: '对应父project的id' })
  pid: number;

  @Column({ length: 30, comment: '子分类名称' })
  name: string;

  @Column({ length: 200, comment: '子分类备注' })
  desc: string;

  @CreateDateColumn({ type: 'timestamp', comment: '创建时间' })
  cTime: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '更新时间' })
  uTime: Date;
}
