import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/model/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }

  public get(){
    return this.firestore.collection('user').snapshotChanges();
  }

  public getById(id: string) {
    return this.firestore.collection('user').doc(id).ref.get().then((item)=>{
      if (item.exists) {
        const user = item.data();
        return {
          id: item.id,
          name: user['name'],
          email: user['email'],
          password: user['password'],
        };
      }

      return new User();
    });
  }

  public getByUID(uid: string) {
    return this.firestore
               .collection(
                 'user',
                  ref =>
                    ref.where('uid', '==', uid)
                ).snapshotChanges();

  }

  public add(user: User) {
    delete user.id;
    return this.firestore
               .collection('user')
               .add({
                 ...user
               });
  }

  public edit(user: User) {
    return this.firestore.doc(`user/${user.id}`).update({
      ...user
    });
  }

  public delete(id: string) {
    return this.firestore.doc(`user/${id}`).delete();
  }
}
