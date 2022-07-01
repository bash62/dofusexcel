import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDofusRecipeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
