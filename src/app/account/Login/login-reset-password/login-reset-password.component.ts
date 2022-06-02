import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login-reset-password',
  templateUrl: './login-reset-password.component.html',
  styleUrls: ['./login-reset-password.component.css']
})
export class LoginResetPasswordComponent implements OnInit {

  angForm: any;     //initialisation des variables
  password1: any
  password2: any
  pwd:any
  m:any
  msg:any | undefined
  UserEmail: any | undefined;

  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {
    this.angForm = this.fb.group({
 
      email: ['', [Validators.required,Validators.minLength(8), Validators.email]], // formulaire pour changer le mot de passe : email : passwword : et confirm password
      password: ['', Validators.required],
      cpassword:['',Validators.required]
     
     
 
    });
   }
 
  ngOnInit() {
    
  }
 
   checkpwd()  // verifier la longeur du mot de passe
   {

     if(this.password1.toString().length<8 )
     {
     
        this.msg='Le mot de passe doit comporter au moins 8 caractères'
  
       return false
      
     }
     return true
   }

  postdata(angForm1:NgForm)  //envoi du formualaire
  {     
      this.dataService.checkUserMail(angForm1.value.email) // verifier si le mail existe dans la base
      .subscribe(data=>{   
        this.UserEmail=data[0]?.email
        console.log(data)
       if(this.UserEmail==undefined)  // si non message d'erreur
        {
          this.m="ce mail n'existe pas"
         // console.log("ce mail n'existe pas")
        //  this.router.navigate(['loginresetpassword'])

          

         
        }else  // si oui mettres a jours le mot de passe de l'user grace a son email
        {
         
          this.dataService.updateuserlogin(angForm1.value.email,angForm1.value.password).pipe(first())
          .subscribe(
              data => {
                         this.router.navigate(['passwordresetsuccessfully']) 
              },
              error=>{
              //  this.msg=" ce mail n'existe pas"
              //  this.router.navigate(['loginresetpassword'])
              }
          )
        }
          
      })
         
        
  }
  get email() { return this.angForm.get('email'); }
  get password(){ return this.angForm.get('password')}
  
          Message()    //gestion des message d'erreur
          {
            return this.msg;
          }
  

}
 