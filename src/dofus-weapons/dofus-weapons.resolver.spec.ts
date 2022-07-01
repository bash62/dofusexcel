import { Test, TestingModule } from '@nestjs/testing';
import { DofusWeaponsResolver } from './dofus-weapons.resolver';
import { DofusWeaponsService } from './dofus-weapons.service';

describe('DofusWeaponsResolver', () => {
  let resolver: DofusWeaponsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DofusWeaponsResolver, DofusWeaponsService],
    }).compile();

    resolver = module.get<DofusWeaponsResolver>(DofusWeaponsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
