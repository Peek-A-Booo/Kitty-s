import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller()
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get('test')
  test() {
    return this.groupService.test();
  }
}
