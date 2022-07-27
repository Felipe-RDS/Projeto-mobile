import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { CommonArticles } from 'src/app/domain/model/common.articles.model';


@Injectable({
  providedIn: 'root'
})
export class CommonArticlesService {

  constructor(private firestore: AngularFirestore) { }

  public get(){
    return this.firestore.collection('commonArticles').snapshotChanges();
  }

  public getById(id: string): Promise<CommonArticles> {
    return this.firestore.collection('commonArticles').doc(id).ref.get().then((item)=>{
      if (item.exists){
        const commonArticle = item.data();

        return{
          id: item.id,
          title: commonArticle['title'],
          icon: commonArticle['icon'],
          subtitle: commonArticle['subtitle'],
          text: commonArticle['text'],
          url: commonArticle['url'],
          image: commonArticle['image']
        };
      }
      return new CommonArticles();
    });

  }

  public adicionar(article: CommonArticles): Promise<unknown> {
    delete article.id;
    return this.firestore.collection('commonArticles').add({...article});
  }
  public edit(article: CommonArticles): Promise<unknown> {
    return this.firestore.doc(`commonArticles/${article.id}`).update({
      ...article
    });
  }

  public delete(id: string): Promise<void> {
    return this.firestore.doc(`commonArticles/${id}`).delete();
  }
}
