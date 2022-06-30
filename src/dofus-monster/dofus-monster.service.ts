import { Injectable } from '@nestjs/common';
import { DofusMonster } from './entities/dofus-monster.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDofusMonsterInput } from './dto/createDofusMonster.input';
import { DofusCategorieService } from '../dofus-categorie/dofus-categorie.service';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';

@Injectable()
export class DofusMonsterService {
  constructor(
    @InjectRepository(DofusMonster)
    private dofusRepository: Repository<DofusMonster>,
  ) {}

  createDofusRessource(
    createDofusRessourceInput: CreateDofusMonsterInput,
  ): Promise<DofusMonster> {
    const newDofusRessource = this.dofusRepository.create(
      createDofusRessourceInput,
    );

    return this.dofusRepository.save(newDofusRessource);
  }
  async findAll(): Promise<DofusMonster[]> {
    return this.dofusRepository.find({ relations: ['categorie'] });
  }
}
