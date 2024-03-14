import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordpressPageRoutingModule } from './wordpress-routing.module';

import { WordpressPage } from './wordpress.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    WordpressPageRoutingModule
  ],
  declarations: [WordpressPage]
})
export class WordpressPageModule {}
