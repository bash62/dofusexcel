import { Injectable } from '@nestjs/common';
import { CreateDofusWeaponInput } from './dto/create-dofus-weapon.input';
import { UpdateDofusWeaponInput } from './dto/update-dofus-weapon.input';

@Injectable()
export class DofusWeaponsService {
  create(createDofusWeaponInput: CreateDofusWeaponInput) {
    return 'This action adds a new dofusWeapon';
  }

  findAll() {
    return `This action returns all dofusWeapons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dofusWeapon`;
  }

  update(id: number, updateDofusWeaponInput: UpdateDofusWeaponInput) {
    return `This action updates a #${id} dofusWeapon`;
  }

  remove(id: number) {
    return `This action removes a #${id} dofusWeapon`;
  }
}
