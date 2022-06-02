//importation de toutes  les bibliothèque utilisé

import { Component, NgModule ,Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule}  from '@angular/material/select'
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';


import { HomeComponent } from './home/home.component';
import { RechercheAllComponent } from './recherche-all/recherche-all.component';
import { RechercheByKeywordsComponent } from './recherche-by-keywords/recherche-by-keywords.component';

import { RequeteComponent } from './requete/requete.component';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './account/registration/registration.component';
import { AdminGrantUsersComponent } from './account/Admin/admin-grant-users/admin-grant-users.component';
import { AdminDashboardComponent } from './account/Admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './account/Login/login/login.component';
import { LoginForgetPasswordComponent } from './account/Login/login-forget-password/login-forget-password.component';
import { LoginResetPasswordComponent } from './account/Login/login-reset-password/login-reset-password.component';
import { NotAuthorizedMessageComponent } from './Alert/not-authorized-message/not-authorized-message.component';
import { PermissionGuardService } from './permission-guard.service';
import { PasswordResetMessageComponent } from './Alert/password-reset-message/password-reset-message.component';
import { PasswordResetsuccessfullyMessageComponent } from './Alert/password-resetsuccessfully-message/password-resetsuccessfully-message.component';
import { RegistrationSuccessfullyMessageComponent } from './Alert/registration-successfully-message/registration-successfully-message.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RechercheAllComponent,
    RechercheByKeywordsComponent,
    MyNavComponent,
    RequeteComponent,
    RegistrationComponent,
    AdminGrantUsersComponent,
    AdminDashboardComponent,
    LoginComponent,
    LoginForgetPasswordComponent,
    LoginResetPasswordComponent,
    NotAuthorizedMessageComponent,
    PasswordResetMessageComponent,
    PasswordResetsuccessfullyMessageComponent,
    RegistrationSuccessfullyMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgbModule,
    AppRoutingModule,
    MatCheckboxModule,
   
    
   
   
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [MatDatepickerModule,MatNativeDateModule,PermissionGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}