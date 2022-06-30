import { CreateDofusCategorieInput } from './create-dofus-categorie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDofusCategorieInput extends PartialType(CreateDofusCategorieInput) {
  @Field(() => Int)
  id: number;
}
