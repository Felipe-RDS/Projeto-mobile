import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public user: Array<User> = [
    {
      id: 0,
      name: 'joao',
      email: 'a@email.com',
      password: 'a1234',
    },
    {
      id: 1,
      name: 'ana',
      email: 'b@email.com',
      password: 'b1234',
    },
    {
      id: 2,
      name: 'maria',
      email: 'c@email.com',
      password: 'c1234',
    }
  ];
  constructor() { }

  public get(){
    return this.user;
  }
}