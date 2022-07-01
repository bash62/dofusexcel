import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateDofusCategorieInput } from './dto/create-dofus-categorie.input';
import { UpdateDofusCategorieInput } from './dto/update-dofus-categorie.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DofusCategorie } from './entities/dofus-categorie.entity';

@Injectable()
export class DofusCategorieService {
  constructor(
    @InjectRepository(DofusCategorie)
    private dofusCategorieRepository: Repository<DofusCategorie>,
  ) {}
  create(
    createDofusCategorieInput: CreateDofusCategorieInput,
  ): Promise<DofusCategorie> {
    const newDofusCategorie = this.dofusCategorieRepository.create(
      createDofusCategorieInput,
    );
    return this.dofusCategorieRepository.save(newDofusCategorie);
  }
  async findAll(): Promise<DofusCategorie[]> {
    return this.dofusCategorieRepository.find({
      relations: ['dofusMonster', 'dofusRessources'],
    });
  }

  findOne(id: number): Promise<DofusCategorie> {
    return this.dofusCategorieRepository.findOne({
      where: [{ id: id }],
      relations: ['dofusMonster', 'dofusRessources'],
    });
  }

  update(id: number, updateDofusCategorieInput: UpdateDofusCategorieInput) {
    return `This action updates a #${id} dofusCategorie`;
  }

  remove(id: number) {
    return `This action removes a #${id} dofusCategorie`;
  }
}
