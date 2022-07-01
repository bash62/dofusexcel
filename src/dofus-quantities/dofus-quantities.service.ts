import { Injectable } from '@nestjs/common';
import { CreateDofusQuantityInput } from './dto/create-dofus-quantity.input';
import { UpdateDofusQuantityInput } from './dto/update-dofus-quantity.input';

@Injectable()
export class DofusQuantitiesService {
  create(createDofusQuantityInput: CreateDofusQuantityInput) {
    return 'This action adds a new dofusQuantity';
  }

  findAll() {
    return `This action returns all dofusQuantities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dofusQuantity`;
  }

  update(id: number, updateDofusQuantityInput: UpdateDofusQuantityInput) {
    return `This action updates a #${id} dofusQuantity`;
  }

  remove(id: number) {
    return `This action removes a #${id} dofusQuantity`;
  }
}
