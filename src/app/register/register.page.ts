import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AutenticacaoService } from '../domain/services/autenticacao.service';
import { UsuariosService } from '../domain/services/user.service';
import { PhotoService } from '../domain/services/photo.service';

import { User } from '../domain/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userForm!: FormGroup;

  public user: User = new User();

  constructor(private authService: AutenticacaoService,
              private route: Router,
              private userService: UsuariosService,
              private photoServ: PhotoService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    });
  }

  public activateCamera() {
    this.photoServ.takeAPicture();
  }

  public register(){
    console.log(this.userForm);

    this.user = {
      id: this.userForm.value.id,
      uid: '',
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password
   };

    if (this.userForm.valid && !this.userForm.pending) {
      this.authService.createAccount(this.user).then((userDoc)=>{
        console.log(userDoc);
        const uid = userDoc.user.uid;

        this.user.uid = uid;

        this.userService.add(this.user).then((response)=>{
                      this.route.navigate(['/login']);
                    });
      }).catch((erro)=>{
        console.error(erro);
      });
    }
    else {
      console.log('Invalid form!');
    }
  }

}
