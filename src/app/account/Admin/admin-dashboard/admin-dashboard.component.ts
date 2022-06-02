import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';
import { Usermodule } from 'src/app/usermodule';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users : Usermodule[] | undefined;   //initialisation des variables
  cat:number | undefined;
  collectionSize:any;
  pageSize=5;
  page:any;
                    
  angForm:any;
  searchFormGroup !:FormGroup;
  Usermodule: any;
 
  constructor(private fb: FormBuilder,private dataService: DataServiceService,private router:Router) {  
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      authorization:['',Validators.required],
      id: ['']
 
    });
   }
 
  ngOnInit() {

    this.searchFormGroup=this.fb.group({             //initialisation d'une variable SEARCH qui permet de chercher un utilsateur dans le l'admin dasnboard
      SEARCH : this.fb.control(null)

    })
    this.getuserdetails();
    
       
 
  }
getuserdetails()        //la fonction qui recupere tous les utilsateur dans la base 
{
  this.dataService.getAllUsers(this.cat).subscribe((response: any[]) =>
    { this.collectionSize=response.length;   //calcule le nombre totale des utilisateurs   
     this.page=~~this.collectionSize/this.pageSize;     //calcule le nombre de page a afficher 
    
      this.users = response.map((item: { Id: number; name: string; pwd: string; email: string;Authorization:boolean; status : string;DateCreation:string ; Telechargement :string}) =>
      { 
        return new Usermodule(   
            item.Id,
            item.name,
            item.pwd,
            item.email,
            item.Authorization,
            item.status,
            item.DateCreation,
            item.Telechargement

        );
      });
      this.Usermodule=this.users;  //apres recuperation des utilisateur on le met dans users
    });
}
deleteuserdetails(user:Usermodule)  //une fonction qui permet de supprimer un utilisateur
{   if( confirm("vous vouler vraiment supprimer cet utilsateur définitivement ?"))
     {this.dataService.removeUser(user.Id)
  .subscribe( (data: any) => {
    //this.users = this.users.filter(u => u !== user);
    this.getuserdetails();     // apres suppression on recupere le reste des utilisateurs
  })
}
}
updateUser(user: Usermodule): void {     //une fonction qui permet de mettre a jours l'authorization et telechagerment d'un user
  
  window.localStorage.removeItem("editId");  //ici on supprime les anciennes valeur  dans localstorage
  window.localStorage.removeItem("aut");       
  window.localStorage.removeItem("tel");         


  window.localStorage.setItem("editId", user.Id.toString());  //ici on met les nouvelle valeur a dans localstorage
  window.localStorage.setItem("aut",user.Authorization.toString());
  window.localStorage.setItem("tel",user.Telechargement.toString());


  this.router.navigate(['admingrantusers']);       // quand l'admmin clique sur modifier il sera rediriger vers le dashboard admingrantusers
};
addUser(): void {                     // une fonction non utilisé elle permet d'ajouter un users
  this.router.navigate(['login']);
};


handleSearchUser()           //permet de chercher un utilsateur dans l'admin dashboard
{
  let search = this.searchFormGroup.value.SEARCH;
  let s= search.toString().trim().toLowerCase();

  this.searchUser(s).subscribe({

    next : (data)=>
    {  
      this.collectionSize=data.length
      this.users=data;
      
    }
  })
}

public searchUser(keywords : any) : Observable<any>     //les parametres de chercher un user dans l'admindashboard : par email ou par nom
{
   let list=  this.Usermodule.filter(  (search: {  name : string | string[]; email: string | string[]; })  => search.name.includes(keywords) || search.email.includes(keywords) );
   return of(list);
}
 getall()       //un click sur user management retourne tout les users de la base
 {
  this.searchUser('').subscribe({

    next : (data)=>
    {  
      this.collectionSize=data.length
      this.users=data;
      
    }
  })
   
}
}