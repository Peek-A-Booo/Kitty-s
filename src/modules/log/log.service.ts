import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  test() {
    return {
      error: 0,
      data: '测试',
    };
  }
}
