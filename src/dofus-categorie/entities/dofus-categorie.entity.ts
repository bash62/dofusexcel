import { ObjectType, Field, Int, ID, createUnionType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DofusMonster } from '../../dofus-monster/entities/dofus-monster.entity';
import { DofusRessource } from '../../dofus-ressource/entities/dofus-ressouce.entity';

@Entity()
@ObjectType()
export class DofusCategorie {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  name: string;

  @OneToMany(() => DofusRessource, (dofusObject) => dofusObject.categorie)
  @Field(() => [DofusRessource], { nullable: true })
  dofusRessources?: DofusRessource[];

  @OneToMany(() => DofusMonster, (dofusObject) => dofusObject.categorie)
  @Field(() => [DofusMonster], { nullable: true })
  dofusMonster?: DofusMonster[];
}
