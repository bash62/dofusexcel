import { Module } from '@nestjs/common';
import { DofusCategorieService } from './dofus-categorie.service';
import { DofusCategorieResolver } from './dofus-categorie.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusCategorie } from './entities/dofus-categorie.entity';
import {DofusObjectService} from "../dofus-object/dofus-object.service";
import {DofusObject} from "../dofus-object/entities/dofus-object.entity";
import {DofusObjectModule} from "../dofus-object/dofus-object.module";

@Module({
  imports: [TypeOrmModule.forFeature([DofusCategorie]) ],
  providers: [DofusCategorieResolver, DofusCategorieService],
  exports: [DofusCategorieService],
})
export class DofusCategorieModule {}
