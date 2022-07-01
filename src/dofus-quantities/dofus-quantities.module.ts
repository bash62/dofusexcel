import { Module } from '@nestjs/common';
import { DofusQuantitiesService } from './dofus-quantities.service';
import { DofusQuantitiesResolver } from './dofus-quantities.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DofusQuantity } from "./entities/dofus-quantity.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DofusQuantity])],
  providers: [DofusQuantitiesResolver, DofusQuantitiesService]
})
export class DofusQuantitiesModule {}
