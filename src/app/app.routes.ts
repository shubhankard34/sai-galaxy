import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainPageComponent } from './main-page/main-page.component';
import { ProductsTabsComponent } from './products-tabs/products-tabs.component';

export const APP_ROUTES: Routes = [
      {
      path: '',
      redirectTo: '/app-main-page',
      pathMatch: 'full'
    },
    {
      path: 'app-main-page',
      component: MainPageComponent
    },
    {
      path: 'app-products-tabs',
      component: ProductsTabsComponent
    }
];

export const APP_ROUTER_PROVIDERS: any = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
