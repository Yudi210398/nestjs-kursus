import { Test, TestingModule } from '@nestjs/testing';
import { Animal4legsController } from './animal4legs.controller';

describe('Animal4legsController', () => {
  let controller: Animal4legsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Animal4legsController],
    }).compile();

    controller = module.get<Animal4legsController>(Animal4legsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
