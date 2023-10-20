import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router:Router) {}

  logout(): void {
    // Appelez la méthode de déconnexion de votre service d'authentification
    this.authService.logout();
    this.router.navigate(['']);
  }
}
