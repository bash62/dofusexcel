import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {DofusRessource} from "../../dofus-ressource/entities/dofus-ressouce.entity";


@Entity()
@ObjectType()
export class DofusIngredient {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field(() => Int, { description: 'Quantite' })
  quantity: number;



}
