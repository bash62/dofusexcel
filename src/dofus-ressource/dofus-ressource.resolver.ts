import {
  Args,
  Mutation,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { DofusRessource } from './dofusRessouce.entity';
import { DofusRessourceService } from './dofus-ressource.service';
import { CreateDofusRessourceInput } from './dto/createDofusRessource.input';

@Resolver((of) => DofusRessource)
export class DofusRessourceResolver {
  
  constructor(private dofusService: DofusRessourceService) {}

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
}
