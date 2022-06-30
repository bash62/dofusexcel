import { Field, Int, InputType } from '@nestjs/graphql';
import {DofusObject} from "../../dofus-object/entities/dofus-object.entity";
import {CreateDofusObjectInput} from "../../dofus-object/dto/create-dofus-object.input";
import {DofusCategorie} from "../../dofus-categorie/entities/dofus-categorie.entity";



@InputType()
export class CreateDofusRessourceInput extends CreateDofusObjectInput {

  @Field((type) => Boolean, { defaultValue: false })
  lootable: boolean;

  @Field((type) => Boolean, { defaultValue: false })
  craftable: boolean;


}
