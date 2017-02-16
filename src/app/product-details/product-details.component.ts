import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../interfaces';
import { TabChange } from './../util/tab-change.util';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
    @Input()
    public product: Product;

    constructor(private router: Router, private tabChange: TabChange) {}

    public backToProducts(): void {
      this.router.navigate(['app-main-page']);
      this.tabChange.selectedMainTabIndex = 1;
    }
}
