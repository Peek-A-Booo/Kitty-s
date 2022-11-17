import { Controller, Get, Post, Query, Body, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto, ProjectDto } from './dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('find')
  find(@Query() query: ProjectDto) {
    return this.projectService.find(query);
  }

  @Post('create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Delete('delete')
  delete(@Body('id') id: number) {
    return this.projectService.delete(id);
  }
}
