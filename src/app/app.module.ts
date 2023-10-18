import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes,RouterModule } from '@angular/router';
import { DiagnosticComponent } from './pages/diagnostic/diagnostic.component';
import { ClientConnectedComponent } from './pages/client-connected/client-connected.component';
import { DoctorConnectedComponent } from './pages/doctor-connected/doctor-connected.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';

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
    path: 'consultation',
    component: ConsultationComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component:HomePageComponent,
    // redirectTo: '/home-page', // Redirige la route vide vers 'home-page'
    // pathMatch: 'full', // Assure une redirection complète
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    DiagnosticComponent,
    ClientConnectedComponent,
    DoctorConnectedComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
