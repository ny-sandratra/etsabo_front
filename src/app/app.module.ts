import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes,RouterModule } from '@angular/router';
import { DiagnosticComponent } from './pages/diagnostic/diagnostic.component';
import { LogoutComponent } from './pages/logout/logout.component';


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
    path: 'diagnostic',
    component: DiagnosticComponent,
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
    redirectTo: '/home-page', // Redirige la route vide vers 'home-page'
    pathMatch: 'full', // Assure une redirection complète
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    DiagnosticComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot(jwtModuleOptions),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'), // Nom du champ où vous stockez le token
        allowedDomains: ['example.com'], // Domaines autorisés (peut être un tableau de domaines)
        disallowedRoutes: ['example.com/unauthorized'], // Routes non autorisées (peut être un tableau de routes)
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
