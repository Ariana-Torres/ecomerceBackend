import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts() {
    return [
      { id: 1, name: 'Pias' },
      { id: 2, name: 'Genero' },
      { id: 3, name: 'Categorias' },
      { id: 4, name: 'Marcas' },
    ];
  }

  getCategories() {
    return [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];
  }

  createProduct() {
    return { id: 3, name: 'Product 3' };
  }

  createCategory() {
    return { id: 3, name: 'Category 3' };
  }

}
