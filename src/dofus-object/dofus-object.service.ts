import { Injectable } from '@nestjs/common';
import { CreateDofusObjectInput } from './dto/create-dofus-object.input';
import { UpdateDofusObjectInput } from './dto/update-dofus-object.input';
import { DofusCategorie } from '../dofus-categorie/entities/dofus-categorie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DofusCategorieService } from '../dofus-categorie/dofus-categorie.service';
import { DofusObject } from './entities/dofus-object.entity';
import { DofusRessource } from "../dofus-ressource/dofusRessouce.entity";

@Injectable()
export class DofusObjectService {
  constructor(
    @InjectRepository(DofusObject)
    private dofusObjectRepository: Repository<DofusObject>,
    private dofusCategorieService: DofusCategorieService,

  ) {}
  createDofusObject(
    createDofusObjectInput: CreateDofusObjectInput,
  ): Promise<DofusObject> {
    const newDofusObject = this.dofusObjectRepository.create(
      createDofusObjectInput,
    );

    return this.dofusObjectRepository.save(newDofusObject);
  }
  async findAll(): Promise<DofusObject[]> {
    return this.dofusObjectRepository.find();
  }

  findOne(id: number): Promise<DofusObject> {
    return this.dofusObjectRepository.findOne({
      where: [{ id: id }],
      relations: ['categorie'],
    });
  }

   async getCategorie(id: number): Promise<DofusCategorie> {
       return this.dofusCategorieService.findOne(id);
  }
}
