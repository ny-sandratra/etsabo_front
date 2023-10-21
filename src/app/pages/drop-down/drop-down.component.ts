import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  userInfo : any;
  menuOpen: boolean = false;
  isAuthenticated : boolean = false;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    if(token){
      this.userService.setUserInfo(token);
      this.userInfo = this.userService.getUserInfo();
      this.isAuthenticated = true;
  }
}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToProfile() {
    // Logique pour la navigation vers le profil
  }

  navigateToSettings() {
    // Logique pour la navigation vers les réglages
  }

  navigateToHelp() {
    // Logique pour la navigation vers l'aide
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
