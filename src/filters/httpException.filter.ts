import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import type { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    /** 当前环境 */
    const ctx = host.switchToHttp();
    /** 请求对象 */
    const req = ctx.getRequest<Request>();
    /** 响应对象 */
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();
    console.log(status, 'status');
    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
    });
  }
}
