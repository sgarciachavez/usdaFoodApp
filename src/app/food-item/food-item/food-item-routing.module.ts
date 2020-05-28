import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodItemPage } from './food-item.page';

const routes: Routes = [
  {
    path: '',
    component: FoodItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodItemPageRoutingModule {}
