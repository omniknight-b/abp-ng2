import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { RootModule } from './root.module';
import { RootComponent } from './root.component';

// 引入必要的模块
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { en_US, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';

@NgModule({
  imports: [
    RootModule,
    ServerModule,
    ModuleMapLoaderModule,
    HttpClientModule,
    NoopAnimationsModule,
    NzI18nModule
  ],
  bootstrap: [RootComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class RootServerModule {}
