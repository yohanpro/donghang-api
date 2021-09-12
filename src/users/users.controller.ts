import {
  HttpException,
  Query,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthUser } from './decorator/user.decorator';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('유저 프로필 조회하기')
  @ApiOperation({ summary: '유저 프로필 조회' })
  @UseGuards(new JwtAuthGuard())
  @Get()
  async getUserProfile(@Query('id') queryId, @AuthUser() requestUser: any) {
    if (requestUser.id !== +queryId) {
      throw new UnauthorizedException();
    }
    return this.usersService.getUserProfile(requestUser.id);
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
