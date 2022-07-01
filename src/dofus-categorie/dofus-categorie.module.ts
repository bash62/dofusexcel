import { Module } from '@nestjs/common';
import { DofusCategorieService } from './dofus-categorie.service';
import { DofusCategorieResolver } from './dofus-categorie.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusCategorie } from './entities/dofus-categorie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DofusCategorie])],
  providers: [DofusCategorieResolver, DofusCategorieService],
  exports: [DofusCategorieService],
})
export class DofusCategorieModule {}
