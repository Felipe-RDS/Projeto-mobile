import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonArticles } from 'src/app/domain/model/common.articles.model';
import { CommonArticlesService } from '../domain/services/common.articles';

@Component({
  selector: 'app-articles-infos',
  templateUrl: './articles-infos.page.html',
  styleUrls: ['./articles-infos.page.scss'],
})
export class ArticlesInfosPage implements OnInit {
  public article: CommonArticles = new CommonArticles();

  public commonArticles: Array<CommonArticles> = [];


  constructor(private rotaAtiva: ActivatedRoute,
              private articleService: CommonArticlesService) { }

  ngOnInit() {
    const codigo = this.rotaAtiva.snapshot.paramMap.get('id');
    this.articleService.getById(codigo).then((article)=>{
      this.article = article;
    });
  }

}
