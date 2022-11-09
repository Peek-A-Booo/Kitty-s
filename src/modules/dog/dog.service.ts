import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class DogService {
  // run() {
  //   return '跑的飞快';
  // }
}
