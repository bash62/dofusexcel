import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DofusIngredientsService } from './dofus-ingredients.service';
import { DofusIngredient } from './entities/dofus-ingredient.entity';
import { CreateDofusIngredientInput } from './dto/create-dofus-ingredient.input';
import { UpdateDofusIngredientInput } from './dto/update-dofus-ingredient.input';

@Resolver(() => DofusIngredient)
export class DofusIngredientsResolver {
  constructor(private readonly dofusIngredientsService: DofusIngredientsService) {}

  @Mutation(() => DofusIngredient)
  createDofusIngredient(@Args('createDofusIngredientInput') createDofusIngredientInput: CreateDofusIngredientInput) {
    return this.dofusIngredientsService.create(createDofusIngredientInput);
  }

  @Query(() => [DofusIngredient], { name: 'dofusIngredients' })
  findAll() {
    return this.dofusIngredientsService.findAll();
  }

  @Query(() => DofusIngredient, { name: 'dofusIngredient' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusIngredientsService.findOne(id);
  }

  @Mutation(() => DofusIngredient)
  updateDofusIngredient(@Args('updateDofusIngredientInput') updateDofusIngredientInput: UpdateDofusIngredientInput) {
    return this.dofusIngredientsService.update(updateDofusIngredientInput.id, updateDofusIngredientInput);
  }

  @Mutation(() => DofusIngredient)
  removeDofusIngredient(@Args('id', { type: () => Int }) id: number) {
    return this.dofusIngredientsService.remove(id);
  }
}
