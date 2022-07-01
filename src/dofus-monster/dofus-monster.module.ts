import { Module } from '@nestjs/common';
import { DofusMonsterService } from './dofus-monster.service';
import { DofusMonsterResolver } from './dofus-monster.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusMonster } from './entities/dofus-monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DofusMonster])],
  providers: [DofusMonsterService, DofusMonsterResolver],
})
export class DofusMonsterModule {}
