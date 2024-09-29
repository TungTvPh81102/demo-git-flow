import { Component, Input, SimpleChanges } from '@angular/core';
import { IProducts } from '../../../../interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() product!: IProducts;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      console.log(this.product);
    }
  }
}
