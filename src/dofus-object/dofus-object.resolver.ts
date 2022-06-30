import {
  Args,
  Info,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DofusObjectService } from './dofus-object.service';
import { DofusObject } from './entities/dofus-object.entity';


@Resolver(() => DofusObject)
export class DofusObjectResolver {
  constructor(private readonly dofusObjectService: DofusObjectService) {}

  @Query(() => [DofusObject], { name: 'dofusObjects' })
  findAll() {
    return this.dofusObjectService.findAll();
  }
  @ResolveField(() => [DofusObject])
  getObject(
    @Parent() dofusObject, // Resolved object that implements Character
    @Info() { dofusRessource }, // Type of the object that implements Character

  ) {
    // Get character's friends
    return [dofusObject];
  }


}
