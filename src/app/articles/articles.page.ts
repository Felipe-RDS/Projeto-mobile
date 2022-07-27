import { Component, OnInit } from '@angular/core';
import { CommonArticles } from 'src/app/domain/model/common.articles.model';
import { CommonArticlesService } from '../domain/services/common.articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  
  public color: boolean = true;

  public commonArticles: Array<CommonArticles> = [];

  constructor(private articleService: CommonArticlesService) { }

    ngOnInit() {
      this.articleService.get().subscribe((commonArticles)=>{
        this.commonArticles = commonArticles.map((item)=>{
          return {
            id: item.payload.doc.id,
            title: item.payload.doc.data()['title'],
            subtitle: item.payload.doc.data()['subtitle'],
            text: item.payload.doc.data()['text'],
            url: item.payload.doc.data()['url'],
            image: item.payload.doc.data()['image'],
            icon: item.payload.doc.data()['icon']
          };
        });
      });
    }

}
