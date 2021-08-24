import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '구글 OAuth 로그인' })
  @Post('google')
  async googleOAuth(@Body() idToken) {
    const token = await this.authService.googleAuth(idToken);
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  protected() {
    return this.authService.myProtectedRouteTest();
  }
}
