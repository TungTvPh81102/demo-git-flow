import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IProducts } from '../../../../interface';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  @Input() product!: IProducts;
  @Output() onEdit = new EventEmitter<IProducts>();
  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      console.log(this.product);
    }
  }

  onHandleEdit(data: IProducts) {
    this.onEdit.emit(data);
  }
}
