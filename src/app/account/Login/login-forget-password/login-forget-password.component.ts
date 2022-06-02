import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login-forget-password',
  templateUrl: './login-forget-password.component.html',
  styleUrls: ['./login-forget-password.component.css']
})
export class LoginForgetPasswordComponent implements OnInit {
  angForm:  any;   //initialisation des variables
  UserEmail:any |undefined;
  UserStatus:any
  msg:any
  
  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {
    this.angForm = this.fb.group({
 
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],   // le formulaire pour reinitialiser le mot de passe : email 
    
 
    });
   }
 
  ngOnInit() {
    
  }


  postdata(angForm1:NgForm)   //envoi du formulaire
  {     
    var e =this.angForm.value.email;
            this.dataService.checkUserMail(angForm1.value.email)  //verifier si le mail existe dans la base de donnéés
            .subscribe(data => {
              this.UserEmail=data[0]?.email;
         if(angForm1.value.email==this.UserEmail)  //si oui on passe
         {
          this.dataService.UserPasswordReset(angForm1.value.email)
          .subscribe(data =>
            {         this.dataService.deleteMail();
                     this.dataService.setMail(e);
                     this.router.navigate(['resetLinkMessage']);
             })
          }
         else        //si non message d'erreur 
        {
          this.msg=" ce mail n'existe pas"
        }
      })
  }
  get email() { return this.angForm.get('email'); }
  
  Message()  // fonction pour gerer les messages d'erreurs
  {
    return this.msg;
  }
  

}
 