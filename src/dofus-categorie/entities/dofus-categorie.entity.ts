import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DofusObject } from '../../dofus-object/entities/dofus-object.entity';

@Entity()
@ObjectType()
export class DofusCategorie {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  name: string;

  @OneToMany(() => DofusObject, (dofusObject) => dofusObject.categorie)
  @Field(() => [DofusObject], { nullable: true })
  dofusObjects?: DofusObject[];
}
