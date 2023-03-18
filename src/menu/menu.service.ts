import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

const db = [
  {
    id: 1,
    name: 'Pais',
  },
  {
    id: 2,
    name: 'Gènero',
  },
  {
    id: 3,
    name: 'Categorias',
  },
  {
    id: 4,
    name: 'Marcas',
  }
];

@Injectable()
export class MenuService {
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
