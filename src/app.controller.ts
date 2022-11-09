import { Controller, Post, HttpCode, Body } from '@nestjs/common';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(200)
  xxxx(@Body() body: any): any {
    console.log(body, 'bodybodybody');
    return 123;
  }
}
