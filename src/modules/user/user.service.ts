import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserType } from './user.entity';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * 注册用户
   * 1. 先查询当前用户是否已经存在
   */
  async register(params: CreateUserDto) {
    const { username, nick, password } = params;

    const existUser = await this.userRepository
      .createQueryBuilder('user')
      .where('username = :username', { username })
      .getOne();
    if (existUser)
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    await this.userRepository
      .createQueryBuilder('user')
      .insert()
      .into(User)
      .values([
        {
          username,
          nick,
          password,
          type: UserType.USER,
        },
      ])
      .execute();
  }
}
