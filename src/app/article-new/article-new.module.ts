import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleNewPageRoutingModule } from './article-new-routing.module';

import { ArticleNewPage } from './article-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleNewPageRoutingModule
  ],
  declarations: [ArticleNewPage]
})
export class ArticleNewPageModule {}
