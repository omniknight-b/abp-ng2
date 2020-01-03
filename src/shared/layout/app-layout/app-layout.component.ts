import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.less']
})
export class AppLayoutComponent extends AppComponentBase {

  isCollapsed = false;

  constructor(
    injector: Injector
  ) {
    super(injector)
  }


}
