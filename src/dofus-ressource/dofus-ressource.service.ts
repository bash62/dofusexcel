import { Injectable } from '@nestjs/common';
import { DofusRessource } from './entities/dofus-ressouce.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDofusRessourceInput } from './dto/createDofusRessource.input';
import { DofusCategorieService } from '../dofus-categorie/dofus-categorie.service';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';

@Injectable()
export class DofusRessourceService {
  constructor(
    @InjectRepository(DofusRessource)
    private dofusRepository: Repository<DofusRessource>,
  ) {}

  createDofusRessource(
    createDofusRessourceInput: CreateDofusRessourceInput,
  ): Promise<DofusRessource> {
    const newDofusRessource = this.dofusRepository.create(
      createDofusRessourceInput,
    );

    return this.dofusRepository.save(newDofusRessource);
  }
  async findAll(): Promise<DofusRessource[]> {
    return this.dofusRepository.find({ relations: ['categorie'] });
  }

  async findOne(id: number) {
    return this.dofusRepository.findOne({
      where: [{ id: id }],
      relations: ['categorie'],
    });
  }
}
