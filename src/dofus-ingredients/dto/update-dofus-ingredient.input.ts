import { CreateDofusIngredientInput } from './create-dofus-ingredient.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDofusIngredientInput extends PartialType(CreateDofusIngredientInput) {
  @Field(() => Int)
  id: number;
}
