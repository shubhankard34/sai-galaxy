import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { TabChange } from './../util/tab-change.util';
import { Product } from './../interfaces';
import { PRODUCTS } from './../data';

@Component({
  selector: 'app-footer-common',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterCommonComponent implements AfterViewInit{

  public products: Product[] = PRODUCTS;
  public currentPage: string;

  @Output()
  public reloadMainPage: EventEmitter<any> = new EventEmitter();

  @Output()
  public reloadProductPage: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private tabChange: TabChange) {}

  public ngAfterViewInit(): void {
    this.currentPage = this.router.url.slice(1, this.router.url.length);
  }
  public goToMainPage(id: number): void {
    if (this.currentPage === 'app-main-page') {
      this.reloadMainPage.emit(id);
    } else {
      this.router.navigate(['app-main-page']);
      this.tabChange.selectedMainTabIndex = id;
    }
  }

  public goToProductCatalog(id: number): void {
    if (this.currentPage === 'app-products-tabs') {
      this.reloadProductPage.emit(id);
    } else {
      this.router.navigate(['app-products-tabs']);
      this.tabChange.selectedProductTabIndex = id;
    }
  }
}
