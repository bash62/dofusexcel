import { Module } from '@nestjs/common';
import { DofusRessourceService } from './dofus-ressource.service';
import { DofusRessourceResolver } from './dofus-ressource.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusRessource } from './entities/dofus-ressouce.entity';
import { DofusObject } from '../dofus-object/entities/dofus-object.entity';
import { DofusObjectModule } from '../dofus-object/dofus-object.module';
import { DofusCategorieModule } from '../dofus-categorie/dofus-categorie.module';

@Module({
  imports: [TypeOrmModule.forFeature([DofusRessource]), DofusObjectModule],
  providers: [DofusRessourceService, DofusRessourceResolver],
})
export class DofusRessourceModule {}
