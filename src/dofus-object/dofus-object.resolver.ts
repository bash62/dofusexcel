import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DofusObjectService } from './dofus-object.service';
import { DofusObject } from './entities/dofus-object.entity';
import { CreateDofusObjectInput } from './dto/create-dofus-object.input';
import { UpdateDofusObjectInput } from './dto/update-dofus-object.input';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';
import { DofusRessource } from '../dofus-ressource/dofusRessouce.entity';

@Resolver(() => DofusObject)
export class DofusObjectResolver {
  constructor(private readonly dofusObjectService: DofusObjectService) {}

  @Mutation(() => DofusObject)
  createDofusObject(
    @Args('createDofusObjectInput')
    createDofusObjectInput: CreateDofusObjectInput,
  ) {
    return this.dofusObjectService.createDofusObject(createDofusObjectInput);
  }

  @Query(() => [DofusObject], { name: 'dofusObjects' })
  findAll() {
    return this.dofusObjectService.findAll();
  }

  @Query(() => DofusCategorie, { name: 'getDofusObject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusObjectService.findOne(id);
  }

  @Query(() => DofusCategorie, { name: 'getCategorie' })
  getCategorie(@Args('id', { type: () => Int }) id: number): Promise<DofusCategorie> {
    return this.dofusObjectService.getCategorie(id);
  }
}
