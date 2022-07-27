import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CommonArticles } from 'src/app/domain/model/common.articles.model';

import SwiperCore, { Autoplay, EffectCube, Pagination, Scrollbar } from 'swiper';
import { CommonArticlesService } from '../domain/services/common.articles';


SwiperCore.use([Autoplay, EffectCube, Scrollbar, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public commonArticles: Array<CommonArticles> = [ ];

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
