import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { CommonArticles } from 'src/app/domain/model/common.articles.model';
import { CommonArticlesService } from '../domain/services/common.articles';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.page.html',
  styleUrls: ['./article-new.page.scss'],
})
export class ArticleNewPage implements OnInit {
  public article: CommonArticles = new CommonArticles();
  public articleFound: CommonArticles = new CommonArticles();
  public articleEdit: CommonArticles = new CommonArticles();

  public found: boolean = false;
  public isEdit: boolean = false;

  constructor(private articleService: CommonArticlesService,
              private route: Router,
              private alert: AlertController) { }

  ngOnInit() {
  }

  public search(){
    this.articleService.getById(this.articleFound.id).then((article)=>{
      this.articleFound = article;
      console.log(this.articleFound);
      this.found = true;
    });
  }

  public register(){
    this.articleService.adicionar(this.article).then((articleDoc)=> {
      this.route.navigate(['/home']);
    });
  }

  public edit(){
    this.isEdit = true;
    this.articleEdit.id = this.articleFound.id;
    this.articleEdit.title = this.articleFound.title;
    this.articleEdit.subtitle = this.articleFound.subtitle;
    this.articleEdit.text = this.articleFound.text;
    this.articleEdit.image = this.articleFound.image;
    this.articleEdit.icon = this.articleFound.icon;
    this.articleEdit.url = this.articleFound.url;
  }

  public cancel(){
    this.isEdit = false;
  }

  public save(){
    this.articleService.edit(this.articleEdit).then((response)=>{
      this.route.navigate(['/home']);
    });
  }

  public delete(){
    this.articleService.delete(this.articleEdit.id).then(()=>{
      this.route.navigate(['/home']);
    });
  }

  public async openAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete article',
      subHeader: '',
      message: 'Do you really want to delete this article?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

}
