import { Injectable } from '@angular/core';
import { IProducts } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products!: IProducts[];
  constructor() {
    this.products = this.getProducts();
  }

  getProducts() {
    return [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://via.placeholder.com/150',
        available: true,
        description: 'Product 1 description',
        category: 'Category 1',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'https://via.placeholder.com/150',
        available: false,
        description: 'Product 2 description',
        category: 'Category 2',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        image: 'https://via.placeholder.com/150',
        available: true,
        description: 'Product 3 description',
        category: 'Category 2',
      },
    ];
  }

  handleRemove(id: number | string) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  addProduct(product: IProducts) {
    this.products.push(product);
  }
}
