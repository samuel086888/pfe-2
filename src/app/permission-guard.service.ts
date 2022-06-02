import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuardService implements CanActivate {  // permet de blocker un user si li n'a pas la permission de  l'admin 

  constructor(private service :DataServiceService ,private router: Router  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    var a=this.service.hasPermission();
    if(!a){

     this.router.navigate(['/NotAuthorizedMessage']);
      return false;

    }
    return a;
   
  }

  
 
 
  }

