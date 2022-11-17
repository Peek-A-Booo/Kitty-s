import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto, ProjectDto } from './dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  // 新增project
  async create(params: CreateProjectDto) {
    const { name, desc } = params;
    await this.projectRepository
      .createQueryBuilder('project')
      .insert()
      .into(Project)
      .values([{ name, desc }])
      .execute();
  }

  // 删除project
  async delete(id: number) {
    console.log(id, '删除');
    const res = await this.projectRepository
      .createQueryBuilder('project')
      .delete()
      .from(Project)
      .where('id = :id', { id })
      .execute();
    console.log(res, 'res');
  }

  // 查询project
  async find(params: ProjectDto) {
    const { name, page, pageSize } = params;

    const skip = (Number(page) - 1) * Number(pageSize);
    const take = Number(pageSize);

    const query = this.projectRepository
      .createQueryBuilder('project')
      .skip(skip)
      .take(take);
    if (name) query.where('project.name LIKE :name', { name: `%${name}%` });
    const list = await query.getMany();
    return list ?? [];
  }
}
