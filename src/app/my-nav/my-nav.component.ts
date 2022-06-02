import { Component , Output, EventEmitter, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataServiceService } from '../data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  // en fonction des valeur de bool on peu voir le menu, si elle à true, on peut voir le menu, si elle à false on ne peut pas voir le menu
  bool:any=true
  //auth =1 si authentification, auth=0 si il n'ya pas d'authentification
  auth=1
  loginbtn:boolean;
  logoutbtn:boolean;
  Hide:boolean|any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    @Output() sidenavClose = new EventEmitter();
  constructor(private breakpointObserver: BreakpointObserver,private dataService: DataServiceService, private httpClient : HttpClient) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }
 
 
}
private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
}
logout()
{
  this.dataService.deleteToken();
  window.location.href = window.location.href;
}

  // bool par defaut à false si il y'au authentification(auth=1) alors bool=true et le menu apparait
  /*ngOnInit(): void {
    
    if(this.loginbtn==false){
      this.bool=true
    }
  }
*/
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  

  isAdmin()
  {
    return this.dataService.isAdmin()
  
  }
}

//.pipe(map(Usermodule=> this.setAuth(Usermodule[0].Authorization)))
   