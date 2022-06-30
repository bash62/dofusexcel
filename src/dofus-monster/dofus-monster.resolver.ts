import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { DofusMonster } from './entities/dofus-monster.entity';
import { DofusMonsterService } from './dofus-monster.service';
import { CreateDofusMonsterInput } from './dto/createDofusMonster.input';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';
import { DofusObjectService } from '../dofus-object/dofus-object.service';

@Resolver((of) => DofusMonster)
export class DofusMonsterResolver {
  constructor(
    private dofusRessourceService: DofusMonsterService,
    private readonly dofusObjectService: DofusObjectService,
  ) {}

  @Query((returns) => [DofusMonster])
  findAllDofusRessources(): Promise<DofusMonster[]> {
    return this.dofusRessourceService.findAll();
  }
  @Mutation((returns) => DofusMonster)
  createDofusRessource(
    @Args('createDofusRessource')
    createDofusRessourceInput: CreateDofusMonsterInput,
  ): Promise<DofusMonster> {
    return this.dofusRessourceService.createDofusRessource(
      createDofusRessourceInput,
    );
  }

  @Query(() => DofusMonster)
  findOneDofusRessourceById(@Args('id', { type: () => Int }) id: number) {
    return this.dofusObjectService.findOne(id);
  }
}
