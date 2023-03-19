import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
const db = [
  {
    id: 1,
    name: 'Comidas',
  },
  {
    id: 2,
    name: 'Zapatos',
  },
  {
    id: 3,
    name: 'Mariscos',
  },
  
];

@Injectable()
export class MarcaService {
  create(createMarcaDto: CreateMarcaDto) {
    return 'This action adds a new marca';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} marca`;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
