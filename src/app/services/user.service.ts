import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo: any;

  constructor(private jwtHelper: JwtHelperService) { }

  setUserInfo(token: string): void {
    this.userInfo = this.jwtHelper.decodeToken(token);
  }

  getUserInfo(): any {
    return this.userInfo;
  }
}
