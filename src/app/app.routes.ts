import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { MainPageComponent } from "./main-page/main-page.component";
import { ProductsTabsComponent } from "./products-tabs/products-tabs.component";

export const APP_ROUTES: Routes = [
      {
      path: '', 
      redirectTo: '/main-page',
      pathMatch: 'full'
    },
    {
      path: 'main-page',  
      component: MainPageComponent
    },
    {
      path: 'products-tabs',  
      component: ProductsTabsComponent
    }
];

export const APP_ROUTER_PROVIDERS: any = [
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
