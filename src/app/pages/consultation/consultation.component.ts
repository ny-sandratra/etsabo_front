import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DropDownComponent } from '../drop-down/drop-down.component';
import { UserService } from '../../services/user.service';

import { DoctorService } from '../../services/doctor.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',],
  encapsulation: ViewEncapsulation.None
})
export class ConsultationComponent implements OnInit {

  userInfo: any;
  doctors : any;
  constructor(private userService: UserService, private doctorService : DoctorService) { 

  this.doctorService.getListDoctor()
  .subscribe((response: any) => {

    this.doctors = response.doctors
    console.log(this.doctors)
  },
  (error : any) => {
    console.log(error)
  }
  )
  

  emailSubject = '';
  emailRecipient = '';
  emailMessage = '';
  
  constructor(private userService: UserService, private http: HttpClient) { }

  sendEmail() {
    const emailData = {
      subject: this.emailSubject,
      recipient: this.emailRecipient,
      message: this.emailMessage
    };
    
    this.http.post('http://localhost:5000/send', emailData).subscribe(
      (response) => {
        console.log('E-mail envoyé avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      }
    );


}
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    if(token){
      this.userService.setUserInfo(token);
      this.userInfo = this.userService.getUserInfo();
      
    }
  }

}
