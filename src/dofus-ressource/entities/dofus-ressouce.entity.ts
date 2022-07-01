import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { DofusCategorie } from '../../dofus-categorie/entities/dofus-categorie.entity';
import { DofusRecipe } from "../../dofus-recipes/entities/dofus-recipe.entity";

@Entity()
@ObjectType()
export class DofusRessource {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ type: 'json', default: null })
  @Field((type) => [Int!])
  level: number[];

  @Column({ unique: false })
  @Field((type) => String)
  name: string;

  @Column()
  @Field((type) => String)
  type: string;

  @Column({ unique: false })
  @Field((type) => String)
  url: string;

  @Column({ nullable: true })
  @Field((type) => String, { nullable: true })
  img: string;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  ingameState: boolean;

  @Column()
  @Field((type) => Int)
  categorieId: number;

  @Column({default: null})
  @Field((type) => Int,{defaultValue: null})
  recipeId?: number;

  @OneToOne(
    () => DofusRecipe,
    (dofusRecipe) => dofusRecipe.id,
  )
  @JoinColumn()
  @Field((type) => DofusRecipe, { nullable: true })
  recipe?: DofusRecipe;



  @ManyToOne(
    () => DofusCategorie,
    (dofusCategorie) => dofusCategorie.dofusRessources,
  )
  @JoinColumn()
  @Field((type) => DofusCategorie, { nullable: false })
  categorie: DofusCategorie;

  @Column({ default: true })
  @Field((type) => Boolean, { defaultValue: true })
  lootable: boolean;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  craftable: boolean;

}
