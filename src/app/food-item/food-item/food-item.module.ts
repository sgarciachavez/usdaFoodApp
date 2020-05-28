import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodItemPageRoutingModule } from './food-item-routing.module';

import { FoodItemPage } from './food-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodItemPageRoutingModule
  ],
  declarations: [FoodItemPage]
})
export class FoodItemPageModule {}
