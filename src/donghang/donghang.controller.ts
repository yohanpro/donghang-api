import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DonghangService } from './donghang.service';

@Controller('donghang')
@UseGuards(new JwtAuthGuard())
export class DonghangController {
  constructor(private readonly donghangService: DonghangService) {}
  @ApiParam({ name: 'countryId', description: 'ISO 국가코드', required: true })
  @ApiTags('나라별 동행 글 전체 가져오기')
  @ApiOperation({ summary: '나라별 동행 전체 글' })
  @ApiBearerAuth()
  @Get(':countryId')
  getDonghangArticleByCountry(@Param('countryId') countryId: number) {
    return `donghang article,`;
  }
}
