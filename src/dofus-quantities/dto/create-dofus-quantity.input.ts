import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDofusQuantityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
