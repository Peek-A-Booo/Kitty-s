import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Response } from 'express';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
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
      error: 0,
      message: 'success',
    };

    return next
      .handle()
      .pipe(
        map((data) => {
          /* 将POST响应码由 201 调整为 200，符合统一处理的规则 */
          if (req.method === 'POST' && res.statusCode === HttpStatus.CREATED) {
            res.statusCode = HttpStatus.OK;
          }
          if (data) response.data = data;
          return response;
        }),
        catchError((error) => {
          return throwError(() => error);
        }),
      )
      .pipe(
        tap(() => {
          // this.logger.log(`After... ${Date.now() - now}ms`);
        }),
      );
  }
}
