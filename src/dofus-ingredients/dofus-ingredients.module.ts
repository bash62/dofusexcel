import { Module } from '@nestjs/common';
import { DofusIngredientsService } from './dofus-ingredients.service';
import { DofusIngredientsResolver } from './dofus-ingredients.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DofusIngredient} from "./entities/dofus-ingredient.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DofusIngredient])],
  providers: [DofusIngredientsResolver, DofusIngredientsService]
})
export class DofusIngredientsModule {}
