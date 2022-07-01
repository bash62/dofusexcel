import { Injectable } from '@nestjs/common';
import { CreateDofusRecipeInput } from './dto/create-dofus-recipe.input';
import { UpdateDofusRecipeInput } from './dto/update-dofus-recipe.input';
import { Repository } from 'typeorm';
import { DofusRecipe } from './entities/dofus-recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDofusRessourceInput } from '../dofus-ressource/dto/createDofusRessource.input';
import { DofusRessource } from '../dofus-ressource/entities/dofus-ressouce.entity';

@Injectable()
export class DofusRecipesService {
  constructor(
    @InjectRepository(DofusRecipe)
    private dofusRepository: Repository<DofusRecipe>,
  ) {}

  createDofusRecipe(
    createDofusRecipeInput: CreateDofusRecipeInput,
  ): Promise<DofusRecipe> {
    const newDofusRessource = this.dofusRepository.create(
      createDofusRecipeInput,
    );

    return this.dofusRepository.save(newDofusRessource);
  }
  findAll(): Promise<DofusRecipe[]> {
    return this.dofusRepository.find({ relations: ['dofusRessources'] });
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
