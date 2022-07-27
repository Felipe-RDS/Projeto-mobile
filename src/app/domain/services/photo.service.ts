import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Foto } from 'src/app/domain/model/foto.model';

import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public foto: Foto = new Foto();

  constructor(private platform: Platform,
              private fireStorage: AngularFireStorage) {
    this.foto.webviewpath = './../assets/images/user.png';
  }

  async takeAPicture() {
    const imagem = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 90
    });

    this.foto = {
        filepath: imagem.path,
        webviewpath: imagem.webPath,
        url: ''
    };

    console.log(this.foto);
  }

  public async upload(nome: string) {
      const nomeFoto = nome;
      let file = null;

      if (this.platform.is('hybrid')) {
          const filePath = this.foto.filepath;

          const readFile = await Filesystem.readFile({
              path: filePath
          });

          file = `data:image/jpeg;base64,${readFile.data}`;
      } else {
          file = this.foto.webviewpath;
      }

      const response = await fetch(file);
      const blob = await response.blob();
      const formData = new FormData();

      formData.append('file', blob, nomeFoto);

      const foto = formData.get('file');
      const filepath = 'fotosUsuario/'+nomeFoto;
      const fileRef = this.fireStorage.ref(filepath);

      const result = this.fireStorage
                        .upload(filepath, foto);

      return result.then(()=> fileRef );
  }
}
