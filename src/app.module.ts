import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ProjectModule } from './modules/project/project.module';
import { GroupModule } from './modules/group/group.module';
import { LogModule } from './modules/log/log.module';

@Module({
  imports: [
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
    ProjectModule,
    GroupModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
