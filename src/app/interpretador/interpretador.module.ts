import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpretadorPageRoutingModule } from './interpretador-routing.module';

import { InterpretadorPage } from './interpretador.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    InterpretadorPageRoutingModule
  ],
  declarations: [InterpretadorPage]
})
export class InterpretadorPageModule {}
