import { Component, AfterViewInit } from '@angular/core';

import { TabChange } from '../util/tab-change.util';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit{
  public mainTabIndex = 0;

  constructor(private tabChange: TabChange) {}

  public ngAfterViewInit(): void {
    if (this.tabChange.selectedMainTabIndex) {
      this.mainTabIndex = this.tabChange.selectedMainTabIndex;
    }
  }
  public changeTab(id: number): void {
    this.mainTabIndex = id;
  }
}
