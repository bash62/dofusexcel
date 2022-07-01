import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DofusQuantitiesService } from './dofus-quantities.service';
import { DofusQuantity } from './entities/dofus-quantity.entity';
import { CreateDofusQuantityInput } from './dto/create-dofus-quantity.input';
import { UpdateDofusQuantityInput } from './dto/update-dofus-quantity.input';

@Resolver(() => DofusQuantity)
export class DofusQuantitiesResolver {
  constructor(private readonly dofusQuantitiesService: DofusQuantitiesService) {}

  @Mutation(() => DofusQuantity)
  createDofusQuantity(@Args('createDofusQuantityInput') createDofusQuantityInput: CreateDofusQuantityInput) {
    return this.dofusQuantitiesService.create(createDofusQuantityInput);
  }

  @Query(() => [DofusQuantity], { name: 'dofusQuantities' })
  findAll() {
    return this.dofusQuantitiesService.findAll();
  }

  @Query(() => DofusQuantity, { name: 'dofusQuantity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusQuantitiesService.findOne(id);
  }

  @Mutation(() => DofusQuantity)
  updateDofusQuantity(@Args('updateDofusQuantityInput') updateDofusQuantityInput: UpdateDofusQuantityInput) {
    return this.dofusQuantitiesService.update(updateDofusQuantityInput.id, updateDofusQuantityInput);
  }

  @Mutation(() => DofusQuantity)
  removeDofusQuantity(@Args('id', { type: () => Int }) id: number) {
    return this.dofusQuantitiesService.remove(id);
  }
}
