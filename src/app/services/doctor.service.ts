import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:5000/api/doctor_route/listdocs'; 
  constructor(private http: HttpClient) { }

  getListDoctor(): Observable<any> {

    return this.http.get(this.apiUrl);

  }
}
