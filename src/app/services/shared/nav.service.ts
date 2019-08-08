import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public isLoggedIn: boolean;
  public name: string;

  constructor() { 
    this.isLoggedIn = true;
  }

  public showLogin(): void {
    this.isLoggedIn = true;
  }

  public hideLogin(name: string): void {
    this.isLoggedIn = false;
    this.name = name;
  }
}
