import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '구글 OAuth 로그인' })
  @ApiResponse({
    status: 200,
    description: '성공시 API 리턴',
  })
  @Post('google')
  async googleOAuth(@Body() idToken) {
    const data = await this.authService.googleAuth(idToken);
    return data;
  }
}
