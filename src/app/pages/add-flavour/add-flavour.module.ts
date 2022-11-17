import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFlavourPageRoutingModule } from './add-flavour-routing.module';

import { AddFlavourPage } from './add-flavour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFlavourPageRoutingModule
  ],
  declarations: [AddFlavourPage]
})
export class AddFlavourPageModule {}
