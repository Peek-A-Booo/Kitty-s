import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupService {
  test() {
    return {
      error: 0,
      data: '测试',
    };
  }
}
