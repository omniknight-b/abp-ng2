import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AbpModule } from '@abp/abp.module';
import { RouterModule } from '@angular/router';
import { AppSessionService } from './session/app-session.service';
import { AppUrlService } from './nav/app-url.service';
import { AppAuthService } from './auth/app-auth.service';
import { AppRouteGuard } from './auth/auth-route-guard';
import { LocalizePipe } from '@shared/pipes/localize.pipe';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { AbpMessageService } from '@shared/abp-message.service';

@NgModule({
    imports: [
        CommonModule,
        AbpModule,
        RouterModule,
        NgZorroAntdModule
    ],
    declarations: [
        LocalizePipe,
        AppLayoutComponent
    ],
    exports: [
        LocalizePipe,
        AppLayoutComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AppSessionService,
                AppUrlService,
                AppAuthService,
                AppRouteGuard,
                AbpMessageService
            ]
        };
    }
}
