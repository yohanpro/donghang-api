import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('모든 유저 조회하기')
  @Get()
  getAllUsers() {
    return this.usersService.allUsers();
  }

  @Post()
  createUser(@Body() body) {
    console.log('body', body);
    const { email } = body;

    if (!email) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
