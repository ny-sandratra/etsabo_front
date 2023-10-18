import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as AOS from 'aos';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService) {
    const token : any = localStorage.getItem('access_token');
    const decodedToken = this.jwtHelper.decodeToken(token);

    // Vous pouvez accéder aux informations du token décrypté
    console.log(decodedToken);

    if (!this.jwtHelper.isTokenExpired(token)) {
      // Le token n'a pas expiré, vous pouvez rediriger ici
    }
  }

  ngOnInit(): void {
    AOS.init();
  }

}
