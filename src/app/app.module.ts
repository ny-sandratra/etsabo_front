import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticComponent } from './pages/diagnostic/diagnostic.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DropDownComponent } from './pages/drop-down/drop-down.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ClientConnectedComponent } from './pages/client-connected/client-connected.component';
import { DoctorConnectedComponent } from './pages/doctor-connected/doctor-connected.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    allowedDomains: ['http://localhost:5000'], // Remplacez par le domaine de votre API
    disallowedRoutes: [''], // Remplacez par les routes non protégées
  },
};


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'client',
    component: ClientConnectedComponent,
  },
  {
    path: 'doctor',
    component: DoctorConnectedComponent,
  },
  {
    path: 'diagnostic',
    component: DiagnosticComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
  {

    path: 'consultation',
    component: ConsultationComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '',
    component: HomePageComponent,

  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    DiagnosticComponent,
    RegisterComponent,
    PatientComponent,
    ConsultationComponent,
    DropDownComponent,
    LogoutComponent,
    ClientConnectedComponent,
    DoctorConnectedComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot(jwtModuleOptions),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
