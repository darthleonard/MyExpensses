import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./pages/car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'pantry',
    loadChildren: () => import('./pages/pantry/pantry-tabs/pantry-tabs.module').then( m => m.PantryTabsPageModule)
  },
  {
    path: 'markets',
    loadChildren: () => import('./pages/pantry/markets/markets.module').then( m => m.MarketsPageModule)
  },
  {
    path: 'house',
    loadChildren: () => import('./pages/house/house.module').then( m => m.HousePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
