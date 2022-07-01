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

@Resolver((of) => DofusMonster)
export class DofusMonsterResolver {
  constructor(
    private dofusMonsterService: DofusMonsterService,
  ) {}

  @Query((returns) => [DofusMonster])
  findAllDofusMonsters(): Promise<DofusMonster[]> {
    return this.dofusMonsterService.findAll();
  }
  @Mutation((returns) => DofusMonster)
  createDofusMonster(
    @Args('createDofusMonster')
    createDofusMonsterInput: CreateDofusMonsterInput,
  ): Promise<DofusMonster> {
    return this.dofusMonsterService.createDofusMonster(createDofusMonsterInput);
  }

  @Query(() => DofusMonster)
  findOneDofusMonsterById(@Args('id', { type: () => Int }) id: number) {
    return this.dofusMonsterService.findOne(id);
  }
}
