import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-resetsuccessfully-message',
  templateUrl: './password-resetsuccessfully-message.component.html',
  styleUrls: ['./password-resetsuccessfully-message.component.css']
})
export class PasswordResetsuccessfullyMessageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   login() //redirection vers le login
   {
        this.router.navigate(['login']);
   }
}
