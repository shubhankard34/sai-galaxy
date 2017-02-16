import { Component, AfterViewInit} from '@angular/core';

import { PRODUCTS } from '../data';
import { Product } from '../interfaces';
import { TabChange } from './../util/tab-change.util';

@Component({
  selector: 'app-products-tabs',
  templateUrl: './products-tabs.component.html',
  styleUrls: ['./products-tabs.component.css']
})
export class ProductsTabsComponent implements AfterViewInit{
    public products: Product[] = PRODUCTS;
    public selectedTab = 0;

    constructor(private tabChange: TabChange) {}

    public ngAfterViewInit(): void {
        this.selectedTab = this.tabChange.selectedProductTabIndex;
    }

    public changeTab(id: number): void {
        this.selectedTab = id;
    }
}
