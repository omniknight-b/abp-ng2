import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppLayoutComponent } from '@shared/layout/app-layout/app-layout.component';
import { from } from 'rxjs';

// import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';

@Component({
    templateUrl: './app.component.html'
})
export class AppComponent extends AppComponentBase implements OnInit {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    ngOnInit(): void {
        /*SignalRAspNetCoreHelper.initSignalR();
        abp.event.on('abp.notifications.received', userNotification => {
            abp.notifications.showUiNotifyForUserNotification(userNotification);
            // Desktop notification
            Push.create('AbpZeroTemplate', {
                body: userNotification.notification.data.message,
                icon: abp.appPath + 'assets/app-logo-small.png',
                timeout: 6000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        });*/
    }
}
