import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DofusRessource } from '../../dofus-ressource/entities/dofus-ressouce.entity';

@Entity()
@ObjectType()
export class DofusQuantity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field((type) => Int)
  quantity: number;

  @ManyToMany(() => DofusRessource)
  @Field(() => DofusRessource)
  dofusRessource?: DofusRessource;
}
