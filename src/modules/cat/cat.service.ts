import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  sayHello() {
    return {
      error: 0,
      data: '奥斯卡将发生发',
    };
  }

  talkWorkds() {
    return {
      error: 0,
      data: '说啊说啊',
    };
  }
}
