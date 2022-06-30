import { InputType, Int, Field } from '@nestjs/graphql';
import {DofusCategorie} from "../../dofus-categorie/entities/dofus-categorie.entity";

@InputType()
export abstract class CreateDofusObjectInput {
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
