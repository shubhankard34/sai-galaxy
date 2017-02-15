import { Component, Input } from '@angular/core';
import { Product } from '../interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
    @Input()
    public product: Product;
}
