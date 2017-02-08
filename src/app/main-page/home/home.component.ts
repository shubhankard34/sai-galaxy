import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { TabChange } from "./../../util/tab-change.util";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private tabChange: TabChange) {}
  public goToProducts(): void {
    this.router.navigate(['products-tabs']);
    this.tabChange.selectedProductTabIndex = 0;
  }
}
