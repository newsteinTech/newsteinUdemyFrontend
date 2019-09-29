import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../models/user/register-model';
import { ToastService } from '../../../services/shared/toast.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { HandledErrorResponse } from '../../../models/shared/handled-error-response';
import { ServiceHelper } from '../../../services/service-helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public loading: boolean;
  public model : RegisterModel;

  constructor(private router: Router, private userService: UserService, private toastService: ToastService) { 
    this.model = new RegisterModel();
  }

  ngOnInit() {
  }

  public register(): void {
    this.loading = true;

    this.userService.signUp(this.model).subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          this.router.navigate(['/login'])
          this.model = null;
        } else {
          this.toastService.error(response.errors[0]);
        }
      },
      error => {
        this.loading = false;
          let handledError: HandledErrorResponse = ServiceHelper.handleErrorResponse({ ...error });
          this.toastService.error(handledError.message);
      }
    )
  }

}
