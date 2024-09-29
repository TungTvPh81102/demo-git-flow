import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';
import { NgIf } from '@angular/common';
import { ProductsComponent } from '../products.component';
import { Router } from '@angular/router';
import { IProducts } from '../../../../interface';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, NgIf, ProductsComponent],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  @Input() product!: IProducts | null;
  @Output() onAdd = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<IProducts>();
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      console.log(this.product);
    }
  }

  onHandleAdd(data: NgForm) {
    console.log(data.value);
    // if (!data.valid) return;
    this.onAdd.emit(data.value);
    data.resetForm();

    if (this.product) {
      this.onEdit.emit(data.value); // Emit edit event if product exists
    } else {
      this.onAdd.emit(data.value); // Emit add event if no product
    }
    // this.router.navigate(['/admin/products']);
  }
}
