import { Module } from '@nestjs/common';
import { DofusMonsterService } from './dofus-monster.service';
import { DofusMonsterResolver } from './dofus-monster.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusMonster } from './entities/dofus-monster.entity';
import { DofusObject } from '../dofus-object/entities/dofus-object.entity';
import { DofusObjectModule } from '../dofus-object/dofus-object.module';
import { DofusCategorieModule } from '../dofus-categorie/dofus-categorie.module';

@Module({
  imports: [TypeOrmModule.forFeature([DofusMonster]), DofusObjectModule],
  providers: [DofusMonsterService, DofusMonsterResolver],
})
export class DofusMonsterModule {}
