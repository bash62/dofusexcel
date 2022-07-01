import { Injectable } from '@nestjs/common';
import { CreateDofusRecipeInput } from './dto/create-dofus-recipe.input';
import { UpdateDofusRecipeInput } from './dto/update-dofus-recipe.input';

@Injectable()
export class DofusRecipesService {
  create(createDofusRecipeInput: CreateDofusRecipeInput) {
    return 'This action adds a new dofusRecipe';
  }

  findAll() {
    return `This action returns all dofusRecipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dofusRecipe`;
  }

  update(id: number, updateDofusRecipeInput: UpdateDofusRecipeInput) {
    return `This action updates a #${id} dofusRecipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} dofusRecipe`;
  }
}
