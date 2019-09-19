import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../models/user/login-model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/shared/toast.service';
import { HandledErrorResponse } from '../../../models/shared/handled-error-response';
import { ServiceHelper } from '../../../services/service-helper';
import { NavService } from '../../../services/shared/nav.service';
import { BaseComponent } from '../../base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  public model: LoginModel;

  public constructor(
    private userService: UserService, 
    private router: Router, 
    private toastService: ToastService, 
    private navService: NavService) {
      super(router, toastService);
      this.model = new LoginModel();
  }

  public ngOnInit() {
  }

  public login(): void {
    this.loading = true;

    this.userService.login(this.model).subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          UserService.saveUserData(response.data);
          this.navService.hideLogin(response.data.user.name);
          this.router.navigate(['/'])
        } else {
          this.toastService.error(response.errors[0]);
        }
      },
      error => {
        this.loading = false;
          let handledError: HandledErrorResponse = ServiceHelper.handleErrorResponse({ ...error });
          this.checkUnauthorized(handledError);
      }
    )
  }

}
