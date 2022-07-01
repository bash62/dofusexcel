import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDofusWeaponInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
