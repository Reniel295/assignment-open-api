import { Test, TestingModule } from '@nestjs/testing';
import { AttackOnTitanController } from './attack-on-titan.controller';

describe('AttackOnTitanController', () => {
  let controller: AttackOnTitanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttackOnTitanController],
    }).compile();

    controller = module.get<AttackOnTitanController>(AttackOnTitanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
