import { Injectable } from '@nestjs/common';
import { DofusMonster } from './entities/dofus-monster.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDofusMonsterInput } from './dto/createDofusMonster.input';

@Injectable()
export class DofusMonsterService {
  constructor(
    @InjectRepository(DofusMonster)
    private dofusRepository: Repository<DofusMonster>,
  ) {}

  createDofusMonster(
    createDofusMonsterInput: CreateDofusMonsterInput,
  ): Promise<DofusMonster> {
    const newDofusMonster = this.dofusRepository.create(
      createDofusMonsterInput,
    );

    return this.dofusRepository.save(newDofusMonster);
  }
  async findAll(): Promise<DofusMonster[]> {
    return this.dofusRepository.find({ relations: ['categorie'] });
  }

  async findOne(id: number) {
    return this.dofusRepository.findOne({
      where: [{ id: id }],
      relations: ['categorie'],
    });
  }
}
