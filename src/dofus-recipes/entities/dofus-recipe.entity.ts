import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DofusRessource } from "../../dofus-ressource/entities/dofus-ressouce.entity";
import { DofusQuantity } from "../../dofus-quantities/entities/dofus-quantity.entity";
import { DofusMonster } from "../../dofus-monster/entities/dofus-monster.entity";

@Entity()
@ObjectType()
export class DofusRecipe {

  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;


  @OneToMany(() => DofusRessource, (dofusRessource) => dofusRessource.recipe)
  @Field(() => [DofusRessource], { nullable: true })
  dofusRessources?: DofusRessource[];

}
