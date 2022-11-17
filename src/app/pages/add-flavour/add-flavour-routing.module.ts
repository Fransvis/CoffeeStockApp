import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFlavourPage } from './add-flavour.page';

const routes: Routes = [
  {
    path: '',
    component: AddFlavourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFlavourPageRoutingModule {}
