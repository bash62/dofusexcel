import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDofusMonsterInput {
  @Field((type) => Boolean, { defaultValue: false })
  isDead: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  mangeable: boolean;

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
