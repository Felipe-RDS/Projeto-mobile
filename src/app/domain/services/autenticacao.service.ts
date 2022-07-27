import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from 'src/app/domain/model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    private isAutenticado: boolean = false;

    constructor(private rota: Router,
                private fireAuth: AngularFireAuth) {}

    public login(user: User) {
      return this.fireAuth.signInWithEmailAndPassword(user.email, user.password);
    }

    public createAccount(user: User) {
        return this.fireAuth
                   .createUserWithEmailAndPassword(user.email, user.password);
    }

    public logout() {
        this.isAutenticado = false;
        return this.fireAuth.signOut();
    }

    public isLogado(): boolean {
        return this.isAutenticado;
    }

    public setAutenticado(value: boolean) {
        this.isAutenticado = value;
    }
}
