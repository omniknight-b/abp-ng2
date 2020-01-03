import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent extends AppComponentBase {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }
}
