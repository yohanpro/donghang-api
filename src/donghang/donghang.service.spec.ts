import { Test, TestingModule } from '@nestjs/testing';
import { DonghangService } from './donghang.service';

describe('DonghangService', () => {
  let service: DonghangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonghangService],
    }).compile();

    service = module.get<DonghangService>(DonghangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
