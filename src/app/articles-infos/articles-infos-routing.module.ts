import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesInfosPage } from './articles-infos.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesInfosPageRoutingModule {}
