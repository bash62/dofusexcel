import {InputType, Int, Field, ID} from '@nestjs/graphql';
import {Column, PrimaryGeneratedColumn} from "typeorm";
import {DofusRessource} from "../../dofus-ressource/entities/dofus-ressouce.entity";

@InputType()
export class CreateDofusIngredientInput {


  @Field(() => Int, { description: 'Quantite' })
  quantity: number;



}
