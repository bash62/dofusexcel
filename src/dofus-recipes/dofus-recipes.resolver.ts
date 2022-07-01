import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DofusRecipesService } from './dofus-recipes.service';
import { DofusRecipe } from './entities/dofus-recipe.entity';
import { CreateDofusRecipeInput } from './dto/create-dofus-recipe.input';
import { UpdateDofusRecipeInput } from './dto/update-dofus-recipe.input';

@Resolver(() => DofusRecipe)
export class DofusRecipesResolver {
  constructor(private readonly dofusRecipesService: DofusRecipesService) {}

  @Mutation(() => DofusRecipe)
  createDofusRecipe(@Args('createDofusRecipeInput') createDofusRecipeInput: CreateDofusRecipeInput) {
    return this.dofusRecipesService.createDofusRecipe(createDofusRecipeInput);
  }

  @Query(() => [DofusRecipe], { name: 'dofusRecipes' })
  findAll() {
    return this.dofusRecipesService.findAll();
  }

  @Query(() => DofusRecipe, { name: 'dofusRecipe' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusRecipesService.findOne(id);
  }

  @Mutation(() => DofusRecipe)
  updateDofusRecipe(@Args('updateDofusRecipeInput') updateDofusRecipeInput: UpdateDofusRecipeInput) {
    return this.dofusRecipesService.update(updateDofusRecipeInput.id, updateDofusRecipeInput);
  }

  @Mutation(() => DofusRecipe)
  removeDofusRecipe(@Args('id', { type: () => Int }) id: number) {
    return this.dofusRecipesService.remove(id);
  }
}
