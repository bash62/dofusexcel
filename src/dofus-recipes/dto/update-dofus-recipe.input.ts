import { CreateDofusRecipeInput } from './create-dofus-recipe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDofusRecipeInput extends PartialType(CreateDofusRecipeInput) {
  @Field(() => Int)
  id: number;
}
