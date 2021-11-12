import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DonghangArticle } from 'src/entities/DonghangArticle';
import { DonghangComments } from 'src/entities/DonghangComments';
import { Repository } from 'typeorm';

@Injectable()
export class DonghangService {
  constructor(
    @InjectRepository(DonghangComments)
    private commentsRepository: Repository<DonghangComments>,

    @InjectRepository(DonghangArticle)
    private articleRepository: Repository<DonghangArticle>,
  ) {}

  getCountryDongHangArticle({ countryId, page = 0, size = 5 }): string {
    return `${countryId} donghang page: ${page}, size: ${size}`;
  }
}
