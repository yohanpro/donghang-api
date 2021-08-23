import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Get()
  testAuthRoute(){
    return 'test Auth Route'
  }
  @ApiOperation({ summary: '소셜 로그인 token으로 JWT 생성' })
  @Post('token')
  authenticateWithToken(@Body() data, @Query('vendor') vendor: string) {
    console.log('google ouath', vendor);

    switch (vendor) {
      case 'google':
        this.authService.googleAuth(data);
        break;

      default:
        break;
    }
  }
}
