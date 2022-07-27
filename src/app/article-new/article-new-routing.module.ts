import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleNewPage } from './article-new.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleNewPageRoutingModule {}
