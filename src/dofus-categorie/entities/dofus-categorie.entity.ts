import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { DofusObject } from '../../dofus-object/entities/dofus-object.entity';

@Entity()
@ObjectType()
export class DofusCategorie {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ unique: true })
  @Field((type) => String)
  name: string;

  @ManyToOne((type) => DofusObject, (dofusObject) => dofusObject.categorie)
  @Field((type) => DofusObject, {nullable: true})
  dofusObject?: DofusObject[];
}
