import {Field, ObjectType} from '@nestjs/graphql';
import {ChildEntity, Column,} from 'typeorm';
import {DofusObject} from "../dofus-object/entities/dofus-object.entity";

@ChildEntity()
@ObjectType({
  implements: () => [DofusObject]
})
export class DofusRessource extends DofusObject{


  @Column({ default: true })
  @Field((type) => Boolean, { defaultValue: true })
  lootable: boolean;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  craftable: boolean;


}
