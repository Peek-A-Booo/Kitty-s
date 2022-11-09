import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { CatModule } from './modules/cat/cat.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
  ],
})
export class AppModule {}
