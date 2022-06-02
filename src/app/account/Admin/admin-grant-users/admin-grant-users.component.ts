import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-admin-grant-users',
  templateUrl: './admin-grant-users.component.html',
  styleUrls: ['./admin-grant-users.component.css']
})
export class AdminGrantUsersComponent implements OnInit {

  angForm: any               //initialisation des variables
  checked : boolean | any ;
  checked1: boolean |any;
  Authorizations : any| undefined
  
  aut:any | undefined
  tel:any | undefined
 
  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {
 
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      Authorization : ['', Validators.required],
      Telechargement:['',Validators.required],
      id: ['', Validators.required],
 
    });
              

   }
   getstatus(checked :boolean)         //permet d'obtenir la position du bouton switch toggle  checked=1 , ou checked=0
   {    let c=checked  
        if(c==true )
     {
       this.aut=1;
     }
     else if(!c)
    
     {
      this.aut=0;
     }
     
    
     
   }

   checkCheckBoxvalue( checked: boolean)  //permet d'obtenir la position du bouton check box  checked=1 , ou checked=0  
  {   let d=checked
         if(d==true)
       {
         this.tel=1;  
        }   
       else if(!d){
       
        this.tel=0;
    
    }
  }
 
  ngOnInit() {
            
   
     
    let Id = window.localStorage.getItem("editId");    //on recupere les valeur des utilisateurs a modifier quon avais mis précédement dans l' admindashboard.componant.ts
    this.aut=window.localStorage.getItem("aut");
    this.tel=window.localStorage.getItem("tel");

    
   
    if(!Id) {                          //si l'id est null alors rediriger vers l' admindashboard.componant.ts
      this.aut=window.localStorage.getItem("aut");
      
      this.router.navigate(['admindashboard']);
      return;
    }
     


   
    this.dataService.getUserId(+Id)   //on recupere les donnees d'un user grace a son id puis on le converti en json data
      .subscribe( data => {            
       // this.angForm.controls[email].setValue('name')
       //this.Authorization.nativeElement.value = this.Authorization;
        this.angForm.patchValue({
          id:data[0].Id,name: data[0].name, email: data[0].email, password: data[0].pwd , Authorization:data[0].Authorization,Telechargement:data[0].Telechargement
 
       });
      });
  }
         
   

  postdata(angForm1:NgForm)          //permet de renvoyer les données modifier a la base de données
  {   
           this.angForm.value.Telechargement=this.tel.toString();
    
    this.dataService.updateuserdetails(angForm1.value.id, angForm1.value.name,angForm1.value.email,angForm1.value.password,this.aut, angForm1.value.Telechargement)
 
    .pipe(first())
    .subscribe(
        data => {
          
            return this.router.navigate(['/admindashboard']) ;
        },
        error => {
         
           
          return this.router.navigate(['/admindashboard']) ;
        });
 
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get id() { return this.angForm.get('id'); }
  get Authorization() {return this.angForm.get('Authorization');}
  get Telechargement() {return this.angForm.get('Telechargement');}
        
}
 