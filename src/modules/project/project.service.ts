import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  test() {
    return {
      error: 0,
      data: '测试',
    };
  }
}
