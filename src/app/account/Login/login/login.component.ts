import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup | any;  //initialisation des variables
  UserData : any | undefined;
  UserStatus:any | undefined;
  msg:any | undefined;
  t:any | undefined;
  s:any | undefined;


  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {
    this.angForm = this.fb.group({
 
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
 
    });
   }
 
  ngOnInit() {
    
  }
  redirectToRegister()       //redirection vers la page : inscriptioon
  {
    this.router.navigate(['registration']);
  }
  
  forgetPassword(){       // redirection vers la page :  mot de passe oublié
    this.router.navigate(['loginforgetpassword'])
    
  }
  postdata(angForm1:NgForm)   //envoyer le formulaire  d'inscription a la base de donnees
  {

                    this.dataService.getUser(angForm1.value.email).subscribe(data =>{  //on verifie d'abord si l'user est présent dans la base de donnees , une fonction prend en parametre l'email saisie par user dans le formulaire
                        
                        this.UserData=data ;
                        let t=this.UserData[0]?.status;
                       
                       if( t==undefined)    //si non message d'erreur le mail n'existe pas

                       {  
                             this.msg="ce mail n'existe";
                       } 
                           
                        else if(t=="inactif")  // si oui et quil n'as pas encore confirmer son mail : on le redirige vers le login avec le message : votre email n'a pas été confirmer apres inscription
                       {
                        this.msg="   L'e-mail n'a pas été confirmé, veuillez vérifier votre boite mail et confirmer l'e-mail avant de continuer"
                        this.router.navigate(['login']);
                       }  
                        else    //si oui et le mail est confirmer: alors login avec succes
                        { 

                          this.dataService.userlogin(angForm1.value.email,angForm1.value.password) // le 
                          .pipe(first())
                          .subscribe(
                              data => { 
                              
                                this.t = data[0]?.Telechargement;   // on recupere les valeurs de Telechargement , status 
                                this.s=data[0]?.status;
                                this.dataService.deleteStatus();
                                this.dataService.setStatus(this.s);
  
                            
                                    if(this.UserData[0].Authorization==1)  // si authorization est a 1 alors il peux acceder et naviguer dans le dashboard
                                    { this.dataService.deleteAuth();
                                      this.dataService.deleteTel()
                                      this.dataService.setAuth('1');
                                      this.dataService.setTel(this.t);
                                      this.router.navigate(['home']);
                                    }
                                  else {          // si non le message : attentez l'authorisation de l'admin avant d'acceder aux donnees
                                      this.dataService.setAuth('0');
                                      this.router.navigate(['NotAuthorizedMessage'])
                                    }
                           
                         },
  
                                  error => {
              
                                  this.msg="le mot de passe est incorrect"   //ou si non alors  : L'identifiant ou le mot de passe est incorrect
              
                                 });
  
  
  

                       
                       }
  })

        
    

  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }

  Message()  //permet d'afficher les message d'erreur
  { 
    return this.msg;
  }

}
