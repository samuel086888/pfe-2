import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';





  loginbtn:boolean;
  logoutbtn:boolean;
  constructor(private dataService: DataServiceService, private httpClient : HttpClient) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
      
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
logout()    //apres deconnection supprimer toutes les donnees stockés dans localstorage
{ 
  this.dataService.deleteToken();
  this.dataService.deleteAuth();
  this.dataService.deleteMail();
  this.dataService.deleteStatus();
  this.dataService.deleteTel();
  this.dataService.clearAll();
  window.location.href = window.location.href;
}

}
 
 
  

