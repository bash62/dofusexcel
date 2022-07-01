import { Module } from '@nestjs/common';
import { DofusRessourceService } from './dofus-ressource.service';
import { DofusRessourceResolver } from './dofus-ressource.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DofusRessource } from './entities/dofus-ressouce.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DofusRessource])],
  providers: [DofusRessourceService, DofusRessourceResolver],
})
export class DofusRessourceModule {}
