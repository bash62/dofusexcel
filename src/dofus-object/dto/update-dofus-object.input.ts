import { CreateDofusObjectInput } from './create-dofus-object.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDofusObjectInput extends CreateDofusObjectInput {
  @Field(() => Int)
  id: number;
}
