import { IsNotEmpty } from 'class-validator';

export class ProjectDto {
  name: string;

  @IsNotEmpty()
  page: string;

  @IsNotEmpty()
  pageSize: string;
}
