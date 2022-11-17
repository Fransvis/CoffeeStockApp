import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFlavourPageRoutingModule } from './edit-flavour-routing.module';

import { EditFlavourPage } from './edit-flavour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFlavourPageRoutingModule
  ],
  declarations: [EditFlavourPage]
})
export class EditFlavourPageModule {}
