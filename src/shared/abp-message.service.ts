import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';


@Injectable()
export class AbpMessageService {

    constructor(
        private _modalService: NzModalService) {
    }

    init() {
        abp.message.info = (message, title) => {
            const displayTitle = title == null ? message : title;
            this._modalService.info({
                nzTitle: displayTitle,
                nzContent: message
            });
        };

        abp.message.success = (message, title) => {
            const displayTitle = title == null ? message : title;
            this._modalService.success({
                nzTitle: displayTitle,
                nzContent: message
            });
        };

        abp.message.warn = (message, title) => {
            const displayTitle = title == null ? message : title;
            this._modalService.warning({
                nzTitle: displayTitle,
                nzContent: message
            });
        };

        abp.message.error = (message, title) => {
            const displayTitle = title == null ? message : title;
            this._modalService.error({
                nzTitle: displayTitle,
                nzContent: message
            });
        };
    }
}
