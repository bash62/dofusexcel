import { Module } from '@nestjs/common';
import { DofusWeaponsService } from './dofus-weapons.service';
import { DofusWeaponsResolver } from './dofus-weapons.resolver';

@Module({
  providers: [DofusWeaponsResolver, DofusWeaponsService]
})
export class DofusWeaponsModule {}
