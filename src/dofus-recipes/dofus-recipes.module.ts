import { Module } from '@nestjs/common';
import { DofusRecipesService } from './dofus-recipes.service';
import { DofusRecipesResolver } from './dofus-recipes.resolver';

@Module({
  providers: [DofusRecipesResolver, DofusRecipesService]
})
export class DofusRecipesModule {}
