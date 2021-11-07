import { Injectable } from '@nestjs/common';

@Injectable()
export class DonghangService {
  getCountryDongHangArticle({ countryId, page = 0, size = 5 }): string {
    return `${countryId} donghang page: ${page}, size: ${size}`;
  }
}
