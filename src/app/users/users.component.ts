import { Component, Injector } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { UserDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';


class PagedUsersRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html'
})
export class UsersComponent extends PagedListingComponentBase<UserDto>  {

  users: UserDto[] = [];
  request: PagedUsersRequestDto = new PagedUsersRequestDto();


  constructor(
    injector: Injector,
    private _userService: UserServiceProxy
  ) {
    super(injector);
  }


  protected list(request: PagedUsersRequestDto, pageNumber: number, finishedCallback: Function): void {
    this._userService
      .getAll(request.keyword, request.isActive, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result) => {
        this.users = result.items;
        this.totalItems = result.totalCount;
      });
  }

}
