import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
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
  @ApiQuery({ name: 'page', description: '페이지', required: false })
  @ApiQuery({
    name: 'size',
    description: '페이지당 보여질 콘텐츠 개수',
    required: false,
  })
  getDonghangArticle(
    @Param('countryId') countryId: number,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    return this.donghangService.getCountryDongHangArticle({
      countryId,
      page,
      size,
    });
  }
}
