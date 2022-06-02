   // le profils d'un utilisateur
export class Usermodule {
    public Id: number;
    public name: string;
    public pwd:string;
    public email:string;
    public status:string;
    public date:string;
    public Authorization:any;
    public Telechargement :any;
  
    constructor(Id:number,name: string,pwd:string,email:string,Authorization:any ,status : any ,date:string,Telechargement:any) {
      this.Id = Id;
      this.name = name;
      this.pwd = pwd;
      this.email = email;
      this.date=date;
      this.Authorization=Authorization;
      this.status=status;
      this.Telechargement=Telechargement;
      
    }
}
 