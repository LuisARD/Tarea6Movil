import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadurezPage } from './madurez.page';

const routes: Routes = [
  {
    path: '',
    component: MadurezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadurezPageRoutingModule {}
