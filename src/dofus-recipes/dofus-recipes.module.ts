import { Module } from '@nestjs/common';
import { DofusRecipesService } from './dofus-recipes.service';
import { DofusRecipesResolver } from './dofus-recipes.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DofusRecipe } from "./entities/dofus-recipe.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DofusRecipe])],
  providers: [DofusRecipesResolver, DofusRecipesService]
})
export class DofusRecipesModule {}
