import { Field, ObjectType } from '@nestjs/graphql';
import { ChildEntity, Column } from 'typeorm';
import {
  DofusObject,
} from '../../dofus-object/entities/dofus-object.entity';
import {DofusObjectType} from "../../dofus-object/enums/dofus-object.enum";

@ChildEntity()
@ObjectType({
  implements: () => [DofusObject],
})
export class DofusMonster extends DofusObject {
  @Column({ default: true })
  @Field((type) => Boolean, { defaultValue: true })
  isDead: boolean;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  mangeable: boolean;
}
