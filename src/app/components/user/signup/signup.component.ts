import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/user/register-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public model : RegisterModel;
  constructor() { 
    this.model = new RegisterModel();
  }

  ngOnInit() {
  }

}
