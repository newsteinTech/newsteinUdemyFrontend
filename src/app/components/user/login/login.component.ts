import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/user/login-model';
import { UserService } from 'src/app/services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/shared/toast.service';
import { HandledErrorResponse } from 'src/app/models/shared/handled-error-response';
import { ServiceHelper } from 'src/app/services/service-helper';
import { NavService } from 'src/app/services/shared/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;
  public loading: boolean;

  public constructor(
    private userService: UserService, 
    private router: Router, 
    private toastService: ToastService, 
    private navService: NavService) {
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
  
  //#region Error handler
  private checkUnauthorized(handledError: HandledErrorResponse): void {
    this.toastService.error(handledError.message);

    if (handledError.code == 401) {
      UserService.logout();
      this.router.navigate(['/login']);
    }
  }
    //#endregion

}
