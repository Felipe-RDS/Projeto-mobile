export class User{
    public id: string;
    public uid: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(id?: string, uid?: string, nome?: string, email?: string,
      password?: string){
      this.id = (id)? id : '';
      this.uid = (uid)? uid : '';
      this.name = (nome)? nome : '';
      this.email = (email)? email : '';
      this.password = (password)? password : '';
    }
}
