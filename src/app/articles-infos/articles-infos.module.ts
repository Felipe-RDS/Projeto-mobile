import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesInfosPageRoutingModule } from './articles-infos-routing.module';

import { ArticlesInfosPage } from './articles-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesInfosPageRoutingModule
  ],
  declarations: [ArticlesInfosPage]
})
export class ArticlesInfosPageModule {}
