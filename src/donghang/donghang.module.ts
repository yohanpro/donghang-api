import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonghangArticle } from 'src/entities/DonghangArticle';
import { DonghangComments } from 'src/entities/DonghangComments';
import { DonghangController } from './donghang.controller';
import { DonghangService } from './donghang.service';

@Module({
  imports: [TypeOrmModule.forFeature([DonghangComments, DonghangArticle])],
  providers: [DonghangService],
  controllers: [DonghangController],
})
export class DonghangModule {}
