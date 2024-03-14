import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadesPageRoutingModule } from './universidades-routing.module';

import { UniversidadesPage } from './universidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    UniversidadesPageRoutingModule
  ],
  declarations: [UniversidadesPage],
  bootstrap: [UniversidadesPage]
})
export class UniversidadesPageModule {}
