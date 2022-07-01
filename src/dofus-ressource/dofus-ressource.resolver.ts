import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { DofusRessource } from './entities/dofus-ressouce.entity';
import { DofusRessourceService } from './dofus-ressource.service';
import { CreateDofusRessourceInput } from './dto/createDofusRessource.input';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';

@Resolver((of) => DofusRessource)
export class DofusRessourceResolver {
  constructor(
    private dofusRessourceService: DofusRessourceService,
  ) {}

  @Query((returns) => [DofusRessource])
  findAllDofusRessources(): Promise<DofusRessource[]> {
    return this.dofusRessourceService.findAll();
  }
  @Mutation((returns) => DofusRessource)
  createDofusRessource(
    @Args('createDofusRessource')
    createDofusRessourceInput: CreateDofusRessourceInput,
  ): Promise<DofusRessource> {
    return this.dofusRessourceService.createDofusRessource(
      createDofusRessourceInput,
    );
  }



  @Query(() => DofusRessource)
  findOneDofusRessourceById(@Args('id', { type: () => Int }) id: number) {
    return this.dofusRessourceService.findOne(id);
  }
}
