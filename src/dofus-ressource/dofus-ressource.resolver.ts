import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { DofusRessource } from './dofusRessouce.entity';
import { DofusRessourceService } from './dofus-ressource.service';
import { CreateDofusRessourceInput } from './dto/createDofusRessource.input';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';
import { DofusObjectService } from '../dofus-object/dofus-object.service';

@Resolver((of) => DofusRessource)
export class DofusRessourceResolver {
  constructor(
    private dofusService: DofusRessourceService,
    private readonly dofusObjectService: DofusObjectService,
  ) {}

  @Query((returns) => [DofusRessource])
  ressource(): Promise<DofusRessource[]> {
    return this.dofusService.findAll();
  }
  @Mutation((returns) => DofusRessource)
  createDofusRessource(
    @Args('createDofusRessource')
    createDofusRessourceInput: CreateDofusRessourceInput,
  ): Promise<DofusRessource> {
    return this.dofusService.createDofusRessource(createDofusRessourceInput);
  }

  @Query(() => DofusCategorie, { name: 'getDofusObject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusObjectService.findOne(id);
  }
}
