import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmailGuardService  implements CanActivate{    // pour blocker un user d'acceder aux composant s'il n'a pas confirmer son mail.

  constructor(private dataservice: DataServiceService , private router : Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var s= this.dataservice.emailConfirmed();
    if(!s)
    {
      return false;
    }
    
     return true;

    
   
  }
}
