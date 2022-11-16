import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';
// import { HttpExceptionFilter } from './filters/httpException.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new TransformInterceptor());
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      // prod 环境关闭错误信息提示
      disableErrorMessages: process.env.NODE_ENV === 'prod',
    }),
  );
  await app.listen(3000);
}

void bootstrap();
