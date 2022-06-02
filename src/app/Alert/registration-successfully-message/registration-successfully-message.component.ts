import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-registration-successfully-message',
  templateUrl: './registration-successfully-message.component.html',
  styleUrls: ['./registration-successfully-message.component.css']
})
export class RegistrationSuccessfullyMessageComponent implements OnInit {

  constructor(private routes: Router , private service : DataServiceService) { }

  ngOnInit(): void {
  }
          login()    //redirection vers le login
          {
             return this.routes.navigate(['/login']);
          }
          
  getUserEmail()  //recuperation du mail
  {
    return this.service.getMail();
  }

}
