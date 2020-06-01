import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarPage } from './car.page';

const routes: Routes = [
  {
    path: '',
    component: CarPage
  },
  {
    path: 'car-detail',
    loadChildren: () => import('./car-detail/car-detail.module').then( m => m.CarDetailPageModule)
  },
  // {
  //   path: 'car-detail/:record',
  //   loadChildren: () => import('./car-detail/car-detail.module').then( m => m.CarDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPageRoutingModule {}
