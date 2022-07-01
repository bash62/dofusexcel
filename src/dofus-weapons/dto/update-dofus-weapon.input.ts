import { CreateDofusWeaponInput } from './create-dofus-weapon.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDofusWeaponInput extends PartialType(CreateDofusWeaponInput) {
  @Field(() => Int)
  id: number;
}
