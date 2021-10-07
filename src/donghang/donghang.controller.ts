import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DonghangService } from './donghang.service';

@Controller('donghang')
@UseGuards(new JwtAuthGuard())
export class DonghangController {
  constructor(private readonly donghangService: DonghangService) {}

  @ApiTags('나라별 동행 글 전체 가져오기')
  @ApiOperation({ summary: '나라별 동행 전체 글' })
  @ApiBearerAuth()
  @Get()
  getDonghangArticleByCountry() {
    return 'donghang article';
  }
}
