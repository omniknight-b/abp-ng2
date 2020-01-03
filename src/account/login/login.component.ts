import { Component, Injector } from '@angular/core';
import { AbpSessionService } from '@abp/session/abp-session.service';
import { AppComponentBase } from '@shared/app-component-base';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent extends AppComponentBase {

  submitting = false;
  loginForm = this._fb.group({
    userNameOrEmailAddress: [null, [Validators.required]],
    password: [null, [Validators.required]],
    rememberClient: [true, [Validators.required]]
  });

  constructor(
    injector: Injector,
    private _fb: FormBuilder,
    public loginService: LoginService,
    private _sessionService: AbpSessionService
  ) {
    super(injector);
  }

  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }
    return true;
  }


  /**
   * login
   */
  public login(): void {
    /* validate form */
    // tslint:disable-next-line: forin
    for (const key in this.loginForm.controls) {
      this.loginForm.controls[key].markAsDirty();
      this.loginForm.controls[key].updateValueAndValidity();
    }
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.loginService.authenticateModel.init({
        userNameOrEmailAddress: value.userNameOrEmailAddress,
        password: value.password,
        rememberClient: value.rememberClient
      });
      this.submitting = true;
      this.loginService.authenticate(() => (this.submitting = false));
    }
  }

}
