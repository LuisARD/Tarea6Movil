import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpretadorPage } from './interpretador.page';

const routes: Routes = [
  {
    path: '',
    component: InterpretadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpretadorPageRoutingModule {}
