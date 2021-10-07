import { Module } from '@nestjs/common';
import { DonghangController } from './donghang.controller';
import { DonghangService } from './donghang.service';

@Module({
  providers: [DonghangService],
  controllers: [DonghangController],
})
export class DonghangModule {}
