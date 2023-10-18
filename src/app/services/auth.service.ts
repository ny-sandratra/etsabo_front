import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/user_route/login'; 
  private isAuthenticated = false;
  private authToken : string ='';

  constructor(private http: HttpClient) { }

    // Authntification login
  login(username: string, password: string): Observable<any> {
    
    const loginData = {
      username: username,
      password: password
    };

    // Spécifiez les en-têtes pour la demande POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, loginData, { headers: headers });
  }
      // Méthode pour effectuer la déconnexion
  logout(): void {
    // Ici, vous pouvez supprimer le jeton JWT, réinitialiser isAuthenticated, etc.
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Méthode pour obtenir le jeton JWT
  getAuthToken(): string {
    return this.authToken;
  }
}
