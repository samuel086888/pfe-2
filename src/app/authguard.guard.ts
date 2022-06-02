import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { DataServiceService } from './data-service.service';

 
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate   {          //une classe Authguard qui implements la l'interface CanActivate
 
  constructor(private dataService: DataServiceService,private router: Router  ) {}
 
  // permet de blocker un composant a un user si il n'a pas l'authorisation d'y naviguer
  canActivate(                  
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // const routeurl: string = state.url;
    // return this.isLogin(routeurl);
    var s=this.dataService.isLoggedIn()
    if(!s)
    {
      this.router.navigate(['/login']);
      return false;
    }
    return s;
  }

 
 
}
 