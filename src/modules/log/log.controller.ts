import { Controller, Get } from '@nestjs/common';
import { LogService } from './log.service';

@Controller()
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get('test')
  test() {
    return this.logService.test();
  }
}
