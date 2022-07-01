import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDofusRessourceInput {
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

  @Field((type) => Boolean, { defaultValue: true })
  ingameState: boolean;

  @Field((type) => Int)
  categorieId: number;

  @Field((type) => Int,{defaultValue: null,nullable:true})
  recipeId?: number;
}
