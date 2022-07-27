import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

import { AutenticacaoService } from 'src/app/domain/services/autenticacao.service';
import { UsuariosService } from 'src/app/domain/services/user.service';

import { User } from 'src/app/domain/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: User = new User();

  constructor(private rota: Router,
              private userServ: UsuariosService,
              private authService: AutenticacaoService) { }

  ngOnInit() {
  }

  public realizarLogin() {
    if (this.user.email && this.user.password) {
      this.authService
          .login(this.user)
          .then((usuarioDoc)=>{
            const uid = usuarioDoc.user.uid;

            this.authService.setAutenticado(true);

            this.userServ
                .getByUID(uid)
                .subscribe((usuarioDB: any[])=>{
                  const [ usuarioLogado ] = usuarioDB;

                  const usuario = {
                     id: usuarioLogado.payload.doc.id,
                     uid: usuarioLogado.payload.doc.data()['uid'],
                     name: usuarioLogado.payload.doc.data()['name'],
                     email: usuarioLogado.payload.doc.data()['email'],
                     password: usuarioLogado.payload.doc.data()['password']
                  };


                  Storage.set({
                    key: 'my-user',
                    value: JSON.stringify(usuario)
                  }).then((resposta)=>{
                      this.rota.navigate(['/home']);
                  });

                });
          });
    }
  }
}


