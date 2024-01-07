import { Test, TestingModule } from '@nestjs/testing';
import { Animal4legsService } from './animal4legs.service';

describe('Animal4legsService', () => {
  let service: Animal4legsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Animal4legsService],
    }).compile();

    service = module.get<Animal4legsService>(Animal4legsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
