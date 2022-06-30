import { Module } from '@nestjs/common';
import { DofusObjectService } from './dofus-object.service';
import { DofusObjectResolver } from './dofus-object.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusCategorieModule } from '../dofus-categorie/dofus-categorie.module';
import { DofusObject } from './entities/dofus-object.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DofusObject]), DofusCategorieModule],
  providers: [DofusObjectResolver, DofusObjectService],
  exports: [DofusObjectService],
})
export class DofusObjectModule {}
