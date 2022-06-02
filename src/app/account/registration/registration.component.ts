import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, first, map } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  angForm : FormGroup | any;  //initialisation des variables
  mail:any
  edata: any | undefined
  msg:any
  res:any
  storeMail:any 
  
  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {
 
    this.angForm = this.fb.group({           //remplissage des formulaire
      email: ['', [Validators.required,Validators.minLength(4), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
     // mobile: ['', Validators.required]
 
    });
   }
 
  ngOnInit() {

 
  }         
  redirectToLogin()
  {
    this.router.navigate(['login'])
  }
  
 

   
  postdata(angForm1:NgForm)  //envoi du formulaire a la base de donnees
  {     
    var e = angForm1.value.email;
   
     this.dataService.checkUserMail(this.angForm.value.email).subscribe(res=>   // verifer si l'user est deja present dans la base donnees
      {
            this.edata=res?.[0]?.email
    
             // console.log( this.edata)
         
         if (this.angForm.value.email==this.edata)  //si oui message d'erreur
            {  
              this.msg="l'adresse email existe déjà" ;
         
              this.router.navigate(['registration']);
       
            }
            else   // si non ajouter les donnees du formulaire a la base de donnees
            {
            this.dataService.userregistration(angForm1.value.name.toString().toLowerCase(),angForm1.value.email,angForm1.value.password)
            .pipe(first()).subscribe(
                data => {
                    this.dataService.deleteMail();
                    this.dataService.setMail(e);
                    this.router.navigate(['/registrationsuccessfully']);
                },
                error => {
                  
                });  
          }
       })
    
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  //get mobile() { return this.angForm.get('mobile'); }
     Message() // gestionnaire de message d'erreur
     {
       return this.msg;
     }

}



 