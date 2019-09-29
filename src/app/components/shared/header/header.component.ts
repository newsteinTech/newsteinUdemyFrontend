import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../services/shared/nav.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public navService: NavService, private router: Router) { }

  ngOnInit() {
    if (UserService.isLoggedIn()) {
      this.navService.hideLogin(UserService.getUser().name);
    }
  }

  public signout() : void{
    this.navService.showLogin();
    UserService.logout();
    this.router.navigate(['/login']);
  }

}
