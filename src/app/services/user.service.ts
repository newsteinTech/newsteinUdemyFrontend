import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/user/login-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupModel } from '../models/user/signup-model';
import { LoginResponse } from '../models/user/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static userKey: string = "lkhkjegreg";

  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  public login(model: LoginModel): Observable<any> {
    let url: string = environment.host + "login";

    return this.httpClient.post<any>(url, model, { headers: this.headers })
  }

  public signUp(model: SignupModel): Observable<any> {
    let url: string = environment.host + "signup";

    return this.httpClient.post<any>(url, model, { headers: this.headers })
  }

  // Store user details and jwt token in local storage to keep user logged in between page refreshes
  public static saveUserData(model: LoginResponse): void {
    if (!model) {
      return;
    }

    localStorage.setItem(UserService.userKey, JSON.stringify(model));
  }

  public static getUserData(): LoginResponse {
    let strData = localStorage.getItem(UserService.userKey);

    if (strData) {
      let user: LoginResponse = JSON.parse(strData);
      return user;
    }

    return null;
  }

  public static getToken(): string {
    let userProfile: LoginResponse = UserService.getUserData();
    if (userProfile) {
      return userProfile.token;
    }

    return null;
  }

  public static isLoggedIn(): boolean {
    if (localStorage.getItem(UserService.userKey)) {
      return true;
    }

    return false;
  }

  public static logout(): void {
    localStorage.removeItem(UserService.userKey);
  }
}
