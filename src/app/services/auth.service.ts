import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/user_route/login'; 

  private authToken : string ='';

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService, private router : Router) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // Vérifie si le token est expiré ou s'il est invalide
    return !this.jwtHelper.isTokenExpired(token);
  }

    // Authntification login
  login(username: string, password: string): Observable<any> {
    
    const loginData = {
      'username': username,
      'password': password
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Indique que vous envoyez des données au format JSON
      }),
    };
    
    return this.http.post(this.apiUrl, loginData, httpOptions);
  }
      // Méthode pour effectuer la déconnexion
  logout(): void {
   
    localStorage.removeItem('access_token');
   
  }

  // Méthode pour obtenir le jeton JWT
  getAuthToken(): string {
    return this.authToken;
  }
}
