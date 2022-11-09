import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Response } from 'express';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { BaseResDto } from '../common/dto/response.dto';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  private readonly logger = new Logger();

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /** 当前环境 */
    const ctx = context.switchToHttp();
    /** 请求对象 */
    const req = ctx.getRequest<Request>();
    /** 响应对象 */
    const res = ctx.getResponse<Response>();

    const response: BaseResDto = {
      code: 0,
      message: 'success',
    };

    console.log(response, 'res');

    const now = Date.now();

    return next
      .handle()
      .pipe(
        map((data) => {
          console.log(data, 'data');
          /* 处理POST的正确返回码，由201统一为200 */
          if (req.method === 'POST' && res.statusCode === HttpStatus.CREATED) {
            res.statusCode = HttpStatus.OK;
          }

          return data;
        }),
      )
      .pipe(
        tap(() => {
          this.logger.log(`After... ${Date.now() - now}ms`);
        }),
      );
  }
}
