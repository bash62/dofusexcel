import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DofusWeaponsService } from './dofus-weapons.service';
import { DofusWeapon } from './entities/dofus-weapon.entity';
import { CreateDofusWeaponInput } from './dto/create-dofus-weapon.input';
import { UpdateDofusWeaponInput } from './dto/update-dofus-weapon.input';

@Resolver(() => DofusWeapon)
export class DofusWeaponsResolver {
  constructor(private readonly dofusWeaponsService: DofusWeaponsService) {}

  @Mutation(() => DofusWeapon)
  createDofusWeapon(@Args('createDofusWeaponInput') createDofusWeaponInput: CreateDofusWeaponInput) {
    return this.dofusWeaponsService.create(createDofusWeaponInput);
  }

  @Query(() => [DofusWeapon], { name: 'dofusWeapons' })
  findAll() {
    return this.dofusWeaponsService.findAll();
  }

  @Query(() => DofusWeapon, { name: 'dofusWeapon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dofusWeaponsService.findOne(id);
  }

  @Mutation(() => DofusWeapon)
  updateDofusWeapon(@Args('updateDofusWeaponInput') updateDofusWeaponInput: UpdateDofusWeaponInput) {
    return this.dofusWeaponsService.update(updateDofusWeaponInput.id, updateDofusWeaponInput);
  }

  @Mutation(() => DofusWeapon)
  removeDofusWeapon(@Args('id', { type: () => Int }) id: number) {
    return this.dofusWeaponsService.remove(id);
  }
}
