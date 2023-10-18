import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
  '../../../../node_modules/font-awesome/css/font-awesome.css',]
})
export class LoginComponent  {
  username: string = '';
  password: string = '';
  loginForm: FormGroup;
  authMessageVisible = false;
  authMessageHTMLSafe: SafeHtml = this.sanitizeHtml('');
  authMessage : string = ''

  constructor( private sanitizer: DomSanitizer,private fb: FormBuilder,private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  submitLogin() : void {
    this.authMessage = '';
    if (this.loginForm.valid){
      this.username = this.loginForm.get('username')?.value;
      this.password = this.loginForm.get('password')?.value;

      this.login()
    }
    else{
      this.authMessageVisible = true;
      this.authMessage = `<span> Veuillez entrer des données valides </span>`;
      this.authMessageHTMLSafe = this.sanitizeHtml(this.authMessage);
     
    }
  }

  login(): void {

    this.authService.login(this.username, this.password)
    .subscribe( (response : any) => {
        if(response.token) {
          console.log('tsy nahazo access' + response);
          this.authMessageVisible = true;
          this.authMessage = `<span> ${response.message}  </span>`;
          this.authMessageHTMLSafe = this.sanitizeHtml(this.authMessage);
          const accessToken = response.token;
        }
        else{
          this.authMessageVisible = true;
          this.authMessage = `<span> ${response.error.message}  </span>`;
          this.authMessageHTMLSafe = this.sanitizeHtml(this.authMessage);
          console.log('tsy nahazo access' + response);
        }
    },
    (error : any) => {
      if (error instanceof HttpErrorResponse) {
          console.log(error)
          this.authMessageVisible = true;
          this.authMessage = `<span> ${error.error.message}  </span>`;
          this.authMessageHTMLSafe = this.sanitizeHtml(this.authMessage);
      }


    })
  }

  logout(): void {
    this.authService.logout();
  }

}
