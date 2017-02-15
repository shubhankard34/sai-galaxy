import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderCommonComponent } from './header/header.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { HomeComponent } from './main-page/home/home.component';
import { CarousalComponent } from './carousal/carousal.component';
import { ProductsComponent } from './main-page/products/products.component';
import { ProductsTabsComponent } from './products-tabs/products-tabs.component';
import { TabChange } from './util/tab-change.util';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderCommonComponent,
    TabGroupComponent,
    HomeComponent,
    CarousalComponent,
    ProductsComponent,
    ProductsTabsComponent,
    AboutUsComponent,
    ProductDetailsComponent,
    ContactUsComponent
  ],
  imports: [
    MaterialModule.forRoot(),
     BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [TabChange],
  bootstrap: [AppComponent]
})
export class AppModule { }
