import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../interfaces';
import { PRODUCTS } from '../../data';
import { TabChange } from './../../util/tab-change.util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    public products: Product[] = PRODUCTS;

    constructor(private router: Router, private tabChange: TabChange) {}

    public goToProductCatalog(id: number): void {
      this.router.navigate(['app-products-tabs']);
      this.tabChange.selectedProductTabIndex = id;
    }
}
