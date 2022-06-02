import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-password-reset-message',
  templateUrl: './password-reset-message.component.html',
  styleUrls: ['./password-reset-message.component.css']
})
export class PasswordResetMessageComponent implements OnInit {

  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
  
  }


  getUserEmail()    //recupere le mail 
  {
    return this.service.getMail();
  }

}
