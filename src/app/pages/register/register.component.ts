import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  name: string = '';
  email: string = '';
  gender: number = 0;
  birthdate : Date = new Date();
  password : string ='';
  confirm_password : string =''
  regMessageVisible = false;
  regMessageHTMLSafe: SafeHtml = this.sanitizeHtml('');
  regMessage: string = '';
  registrationForm : FormGroup;



  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder, private router: Router, private registrationService: RegistrationService) { 
    this.registrationForm = this.fb.group({
      
      username:['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate : new FormControl(new Date()),
      password : ['', Validators.required],
      confirm_password : ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  submitRegistration() : void {
    this.regMessage ='';
    console.log(this.registrationForm.value);
    if(this.registrationForm.valid){
      this.username = this.registrationForm.get('username')?.value;
      this.name = this.registrationForm.get('name')?.value;
      this.email = this.registrationForm.get('email')?.value;
      this.birthdate = this.registrationForm.get('birthdate')?.value;
      this.password = this.registrationForm.get('password')?.value;
      this.confirm_password = this.registrationForm.get('confirm_password')?.value;
      this.gender = this.registrationForm.get('gender')?.value;

      this.register();

    }
    else{
      this.regMessageVisible = true;
      this.regMessage = `<span> Veuillez entrer des données valides </span>`;
      this.regMessageHTMLSafe = this.sanitizeHtml(this.regMessage);
    }
  }

  register(): void {
    this.registrationService.register(this.username,this.email,this.name,this.password,this.confirm_password,this.gender,this.birthdate)
    .subscribe((response : any) => {
      if (response.success){
        console.log(response);
        this.regMessageVisible = true;
        this.regMessage = `<span> ${response.message}  </span>`;
        this.regMessageHTMLSafe = this.sanitizeHtml(this.regMessage);
      }
      else{
        console.log(response)
        this.regMessageVisible = true;
        this.regMessage = `<span> ${response.error.error}  </span>`;
        this.regMessageHTMLSafe = this.sanitizeHtml(this.regMessage);
      }
    },
    (error : any) => {
      if(error  instanceof HttpErrorResponse){
        console.log(error);
        this.regMessageVisible = true;
        this.regMessage = `<span> ${error.error.error}  </span>`;
        this.regMessageHTMLSafe = this.sanitizeHtml(this.regMessage);
      }
    }
    )
    

  }
  

}
