import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { IProducts } from '../../../interface';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: IProducts[];
  selectedProduct!: IProducts;
  editProduct!: IProducts | null;

  constructor(private productService: ProductsService) {
    this.products = this.productService.getProducts();
  }

  handleRemove(id: number | string) {
    if (confirm('Bạn có chắc chắn muốn xoá sản phẩm?')) {
      this.products = this.products.filter((product) => product.id !== id);
    }
  }

  show(product: IProducts) {
    this.selectedProduct = product;
  }

  edit(product: IProducts) {
    console.log(product);
    this.editProduct = { ...product };
  }

  onHandleAdd(data: IProducts) {
    this.products.push(data);
  }

  onHandleEdit(data: IProducts) {
    const index = this.products.findIndex((product) => product.id === data.id);
    if (index !== -1) {
      this.products[index] = data;
    }
  }
}
