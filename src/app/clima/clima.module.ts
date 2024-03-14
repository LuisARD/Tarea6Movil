import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaPageRoutingModule } from './clima-routing.module';

import { ClimaPage } from './clima.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    ClimaPageRoutingModule
  ],
  declarations: [ClimaPage]
})
export class ClimaPageModule {}
