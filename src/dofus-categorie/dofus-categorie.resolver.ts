import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
  Info,
} from '@nestjs/graphql';
import { DofusCategorieService } from './dofus-categorie.service';
import { DofusCategorie } from './entities/dofus-categorie.entity';
import { CreateDofusCategorieInput } from './dto/create-dofus-categorie.input';
import { UpdateDofusCategorieInput } from './dto/update-dofus-categorie.input';
import { DofusObjectService } from '../dofus-object/dofus-object.service';
import { DofusObject } from '../dofus-object/entities/dofus-object.entity';

@Resolver(() => DofusCategorie)
export class DofusCategorieResolver {
  constructor(private readonly dofusCategorieService: DofusCategorieService) {}

  @Mutation(() => DofusCategorie)
  createDofusCategorie(
    @Args('createDofusCategorieInput')
    createDofusCategorieInput: CreateDofusCategorieInput,
  ): Promise<DofusCategorie> {
    return this.dofusCategorieService.create(createDofusCategorieInput);
  }

  @Query(() => [DofusCategorie], { name: 'dofusCategories' })
  findAll() {
    return this.dofusCategorieService.findAll();
  }

  @Query(() => DofusCategorie, { name: 'dofusCategorie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusCategorieService.findOne(id);
  }

  @Mutation(() => DofusCategorie)
  updateDofusCategorie(
    @Args('updateDofusCategorieInput')
    updateDofusCategorieInput: UpdateDofusCategorieInput,
  ) {
    return this.dofusCategorieService.update(
      updateDofusCategorieInput.id,
      updateDofusCategorieInput,
    );
  }

  @Mutation(() => DofusCategorie)
  removeDofusCategorie(@Args('id', { type: () => Int }) id: number) {
    return this.dofusCategorieService.remove(id);
  }
}
