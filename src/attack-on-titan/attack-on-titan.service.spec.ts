import { Test, TestingModule } from '@nestjs/testing';
import { AttackOnTitanService } from './attack-on-titan.service';

describe('AttackOnTitanService', () => {
  let service: AttackOnTitanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttackOnTitanService],
    }).compile();

    service = module.get<AttackOnTitanService>(AttackOnTitanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
