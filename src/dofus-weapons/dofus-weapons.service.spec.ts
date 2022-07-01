import { Test, TestingModule } from '@nestjs/testing';
import { DofusWeaponsService } from './dofus-weapons.service';

describe('DofusWeaponsService', () => {
  let service: DofusWeaponsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DofusWeaponsService],
    }).compile();

    service = module.get<DofusWeaponsService>(DofusWeaponsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
