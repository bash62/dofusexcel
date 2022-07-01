import { Injectable } from '@nestjs/common';
import { CreateDofusIngredientInput } from './dto/create-dofus-ingredient.input';
import { UpdateDofusIngredientInput } from './dto/update-dofus-ingredient.input';

@Injectable()
export class DofusIngredientsService {
  create(createDofusIngredientInput: CreateDofusIngredientInput) {
    return 'This action adds a new dofusIngredient';
  }

  findAll() {
    return `This action returns all dofusIngredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dofusIngredient`;
  }

  update(id: number, updateDofusIngredientInput: UpdateDofusIngredientInput) {
    return `This action updates a #${id} dofusIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} dofusIngredient`;
  }
}
