import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousePage } from './house.page';

const routes: Routes = [
  {
    path: '',
    component: HousePage
  },
  {
    path: 'house-detail',
    loadChildren: () => import('./house-detail/house-detail.module').then( m => m.HouseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousePageRoutingModule {}
