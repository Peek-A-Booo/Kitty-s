import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { ProjectModule } from './modules/project/project.module';
import { GroupModule } from './modules/group/group.module';
import { LogModule } from './modules/log/log.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'kitty',
      entities: ['./dist/modules/**/*.entity.js'],
      synchronize: true,
    }),
    UserModule,
    ProjectModule,
    GroupModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
