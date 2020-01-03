import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';


@Injectable()
export class AbpMessageService {

    constructor(
        private _modalService: NzModalService) {
    }

    init() {
        abp.message.info = (message, title) => {
            const dispalyTitle = title == null ? message : title;
            this._modalService.info({
                nzTitle: dispalyTitle,
                nzContent: message
            });
        };

        abp.message.success = (message, title) => {
            const dispalyTitle = title == null ? message : title;
            this._modalService.success({
                nzTitle: dispalyTitle,
                nzContent: message
            });
        };

        abp.message.warn = (message, title) => {
            const dispalyTitle = title == null ? message : title;
            this._modalService.warning({
                nzTitle: dispalyTitle,
                nzContent: message
            });
        };

        abp.message.error = (message, title) => {
            const dispalyTitle = title == null ? message : title;
            this._modalService.error({
                nzTitle: dispalyTitle,
                nzContent: message
            });
        };
    }
}
