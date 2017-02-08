import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PRODUCTS } from './../data';
import { Product } from './../interfaces';
import { TabChange } from './../util/tab-change.util';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
    public products: Product[] = PRODUCTS;
    constructor(private router: Router, private tabChange: TabChange) {}
    public goToProductCatalog(id: number): void {
      this.router.navigate(['products-tabs']);
      this.tabChange.selectedProductTabIndex = id;
    }
}
