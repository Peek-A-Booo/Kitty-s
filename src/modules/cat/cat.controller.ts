import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('say')
  getHello(): any {
    return this.catService.sayHello();
  }

  @Post('talk')
  async talkWords(@Body() bodys: CreateCatDto) {
    return this.catService.talkWorkds();
  }
}
