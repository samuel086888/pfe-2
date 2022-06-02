import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './account/Admin/admin-dashboard/admin-dashboard.component';
import { AdminGrantUsersComponent } from './account/Admin/admin-grant-users/admin-grant-users.component';
import { LoginForgetPasswordComponent } from './account/Login/login-forget-password/login-forget-password.component';
import { LoginResetPasswordComponent } from './account/Login/login-reset-password/login-reset-password.component';
import { LoginComponent } from './account/Login/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { NotAuthorizedMessageComponent } from './Alert/not-authorized-message/not-authorized-message.component';
import { AuthguardGuard } from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RechercheAllComponent } from './recherche-all/recherche-all.component';
import { RechercheByKeywordsComponent } from './recherche-by-keywords/recherche-by-keywords.component';
import { RequeteComponent } from './requete/requete.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { PermissionGuardService } from './permission-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { PasswordResetMessageComponent } from './Alert/password-reset-message/password-reset-message.component';
import { PasswordResetsuccessfullyMessageComponent } from './Alert/password-resetsuccessfully-message/password-resetsuccessfully-message.component';
import { RegistrationSuccessfullyMessageComponent } from './Alert/registration-successfully-message/registration-successfully-message.component';
import { EmailGuardService } from './email-guard.service';

const routes: Routes = [
{path:'', component:LoginComponent},
  // {path:'home', component:HomeComponent,canActivate: [AuthguardGuard] , children :[
  //   {path:'admindashboard',component:AdminDashboardComponent, canActivateChild : [AuthguardGuard]},
  //   {path:'admingrantusers',component:AdminGrantUsersComponent , canActivateChild : [AuthguardGuard]},
     
  // ]},
  {path:'home',component:HomeComponent,canActivate :[AuthguardGuard]},
  {path:'admindashboard',component:AdminDashboardComponent, canActivate : [ AuthguardGuard,PermissionGuardService,AdminGuardService]},
  {path:'admingrantusers',component:AdminGrantUsersComponent , canActivate: [AuthguardGuard,PermissionGuardService,AdminGuardService]},
  

  {path:'recherche_all', component: RechercheAllComponent ,canActivate: [AuthguardGuard,PermissionGuardService] },
  {path:'rechercheBK', component: RechercheByKeywordsComponent ,canActivate: [AuthguardGuard,PermissionGuardService]},
  {path:'requete',component:RequeteComponent,canActivate: [AuthguardGuard,PermissionGuardService] },
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
 
  {path:'loginforgetpassword',component:LoginForgetPasswordComponent},
  {path:'loginresetpassword',component:LoginResetPasswordComponent},
  {path:'mynav',component:MyNavComponent,canActivate: [AuthguardGuard,PermissionGuardService] },
  {path:'NotAuthorizedMessage',component:NotAuthorizedMessageComponent,canActivate : [AuthguardGuard]},
  {path:'resetLinkMessage',component:PasswordResetMessageComponent},
  {path:'passwordresetsuccessfully',component:PasswordResetsuccessfullyMessageComponent},
  {path:'registrationsuccessfully',component:RegistrationSuccessfullyMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
