import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFlavourPage } from './edit-flavour.page';

const routes: Routes = [
  {
    path: '',
    component: EditFlavourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFlavourPageRoutingModule {}
