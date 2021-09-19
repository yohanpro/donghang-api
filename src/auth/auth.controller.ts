import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: '구글 OAuth 로그인' })
  @ApiResponse({
    status: 200,
    description: '성공시 API 리턴',
  })
  @ApiParam({
    name: 'idToken',
    type: String,
    example: 'dkjfakeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  @Post('google')
  async googleOAuth(@Body() idToken, @Res({ passthrough: true }) res) {
    const data = await this.authService.googleAuth(idToken);

    res.cookie('johns-token', data, {
      httpOnly: true,
    });
    return data;
  }

  @ApiParam({
    name: 'accessToken',
    type: String,
  })
  @ApiOperation({
    summary: 'refresh 토큰',
  })
  @ApiResponse({
    status: 200,
    description: 'refresh 토큰 발급',
  })
  @Post('refresh_token')
  async refreshAccessToken(@Body() payload) {
    const data = await this.authService.refreshAccessToken(payload.token);
    return data;
  }
}
