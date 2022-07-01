import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  ChildEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DofusCategorie } from '../../dofus-categorie/entities/dofus-categorie.entity';

@Entity()
@ObjectType()
export class DofusMonster {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ type: 'json', default: null })
  @Field((type) => [Int!])
  level: number[];

  @Column({ type: 'json', default: null })
  @Field((type) => [String!],{nullable:true, defaultValue:null})
  zone: string[];

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

  @ManyToOne(
    () => DofusCategorie,
    (dofusCategorie) => dofusCategorie.dofusMonster,
  )
  @JoinColumn()
  @Field((type) => DofusCategorie, { nullable: false })
  categorie: DofusCategorie;

  @Column({ default: true, nullable: true })
  @Field((type) => Boolean, { defaultValue: true, nullable: true })
  isDead: boolean;

  @Column({ default: false, nullable: true })
  @Field((type) => Boolean, { defaultValue: false, nullable: true })
  mangeable: boolean;
}
