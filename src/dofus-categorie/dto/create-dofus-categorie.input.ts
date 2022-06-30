import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateDofusCategorieInput {


  @Column({ unique: true })
  @Field((type) => String)
  name: string;


}
