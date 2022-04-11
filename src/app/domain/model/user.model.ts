export class User{
    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(id?: number, nome?: string, email?: string,
      password?: string){
      this.id = (id)? id : 999;
      this.name = (nome)? nome : '';
      this.email = (email)? email : '';
      this.password = (password)? password : '';
    }
}
