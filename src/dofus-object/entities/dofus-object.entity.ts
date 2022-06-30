import { Field, ID, Int, InterfaceType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { DofusCategorie } from '../../dofus-categorie/entities/dofus-categorie.entity';
import { DofusRessource } from '../../dofus-ressource/entities/dofus-ressouce.entity';
import {DofusMonster} from "../../dofus-monster/entities/dofus-monster.entity";

@Entity()
@InterfaceType({
  resolveType(dofusObject, context, info) {
    if (dofusObject instanceof DofusRessource) {
      return DofusRessource;
    }
    return DofusObject;
  },
})
@TableInheritance({
  column: { type: 'varchar', name: 'dofusObject' },
})
export abstract class DofusObject {
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

  @ManyToOne(
    () => DofusCategorie,
    (dofusCategorie) => dofusCategorie.dofusObjects,
  )
  @JoinColumn()
  @Field((type) => DofusCategorie, { nullable: false })
  categorie: DofusCategorie;
}
