import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:5000/api/user_route/registration';
  constructor(private http: HttpClient) { }

  register(username: string, email: string, name:string, password: string,confirm_password:string, gender: number, birthdate: Date): Observable<any> {

    const registrationData = {
      "username": username,
      "password": password,
      "confirm_password": confirm_password,
      "email": email,
      "name": name,
      "birthdate": birthdate,
      "gender": gender

    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Indique que vous envoyez des données au format JSON
      }),
    };  
    return this.http.post(this.apiUrl, registrationData, httpOptions);
  }

}
