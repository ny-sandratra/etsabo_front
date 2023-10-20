import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import * as AOS from 'aos';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  loaderVisible : boolean = true;
  userInfo: any;

  constructor(private jwtHelper: JwtHelperService, private authService : AuthService, private userService : UserService) {  }
 
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // Vérifie si le token est expiré ou s'il est invalide
    return !this.jwtHelper.isTokenExpired(token);
  }

  ngOnInit(): void {
    AOS.init();
    const token : any = localStorage.getItem('access_token');
    if(token){
      this.userService.setUserInfo(token);
      this.userInfo = this.userService.getUserInfo();      
      this.loaderVisible = false;
      //console.log(decodedToken);
    }
    
    
  }



}
