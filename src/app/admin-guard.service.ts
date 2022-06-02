import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{  //blocker le dashboard admin aux users

  constructor(private DataService : DataServiceService, private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var admin= this.DataService.isAdmin();
        if(!admin)
        {
          return false;
        }

       
        return admin;
  }
}
