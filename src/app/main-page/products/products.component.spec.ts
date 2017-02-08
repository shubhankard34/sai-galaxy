import { async, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import { TabChange } from "./../../util/tab-change.util";
import { ProductsComponent } from './products.component';
import { PRODUCTS } from "../../data";

describe('Product List', () => {
    let productsComponent:ProductsComponent;
    let router: Router
    let tabChange: TabChange;
    
    beforeEach(() => {
        productsComponent = new ProductsComponent(router,tabChange);
        TestBed.configureTestingModule({
            declarations: [ProductsComponent],
            imports: [RouterTestingModule]
        });
    });

    it('Should get 5 products', () => {
        expect(productsComponent.products.length).toBe(PRODUCTS.length);
    });

    it('Should set correct Tab Index', () => {
        productsComponent.goToProductCatalog(2);
        expect(router.navigate(['products-tabs'])).toBe(true);
        expect(tabChange.selectedProductTabIndex).toBe(2);
    });
});
