import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadurezPageRoutingModule } from './madurez-routing.module';

import { MadurezPage } from './madurez.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    MadurezPageRoutingModule
  ],
  declarations: [MadurezPage]
})
export class MadurezPageModule {}
