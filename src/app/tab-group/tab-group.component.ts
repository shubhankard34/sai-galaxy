import { Component, Input } from '@angular/core';

import { TabChange } from './../util/tab-change.util';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent {
    @Input()
    public selectedTab;

    constructor(private tabChange: TabChange) {}
}
