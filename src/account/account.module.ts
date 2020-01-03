import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AbpModule } from '@abp/abp.module';

import { AccountRoutingModule } from './account-routing.module';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { AccountLanguagesComponent } from './layout/account-languages.component';
import { LoginService } from './login/login.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        AbpModule,
        SharedModule,
        ServiceProxyModule,
        AccountRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        AccountComponent,
        LoginComponent,
        AccountLanguagesComponent
    ],
    providers: [
        LoginService
    ],
    entryComponents: [
    ]
})
export class AccountModule {

}
