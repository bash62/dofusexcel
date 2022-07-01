import { CreateDofusQuantityInput } from './create-dofus-quantity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDofusQuantityInput extends PartialType(CreateDofusQuantityInput) {
  @Field(() => Int)
  id: number;
}
