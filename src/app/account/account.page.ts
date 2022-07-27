import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../domain/services/photo.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public photoServ: PhotoService) { }

  ngOnInit() {
  }

  public activateCamera() {
    this.photoServ.takeAPicture();
  }
}
