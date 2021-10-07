import { Test, TestingModule } from '@nestjs/testing';
import { DonghangController } from './donghang.controller';

describe('DonghangController', () => {
  let controller: DonghangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonghangController],
    }).compile();

    controller = module.get<DonghangController>(DonghangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
