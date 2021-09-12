import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findUserByEmail(email) {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

  async getUserProfile(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'email', 'nickname', 'verifiedUser', 'userPicture'],
    });

    return user;
  }
  async allUsers() {
    const allUsers = await this.usersRepository.find();
    return allUsers;
  }
}
