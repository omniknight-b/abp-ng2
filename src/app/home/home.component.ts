import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent extends AppComponentBase {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }
}
