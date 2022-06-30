import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateDofusObjectInput } from '../../dofus-object/dto/create-dofus-object.input';

@InputType()
export class CreateDofusRessourceInput implements CreateDofusObjectInput {
  @Field((type) => Boolean, { defaultValue: false })
  lootable: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  craftable: boolean;

  @Field((type) => [Int!])
  level: number[];

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  type: string;

  @Field((type) => String)
  url: string;

  @Field((type) => String, { nullable: true })
  img?: string;

  @Field((type) => Boolean, { defaultValue: false })
  ingameState: boolean;

  @Field((type) => Int)
  categorieId: number;
}
