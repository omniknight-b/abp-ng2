import { AppComponentBase } from 'shared/app-component-base';
import { Injector } from '@angular/core';

export abstract class FormComponentBase extends AppComponentBase {

    constructor(injector: Injector) {
        super(injector);
    }

}
