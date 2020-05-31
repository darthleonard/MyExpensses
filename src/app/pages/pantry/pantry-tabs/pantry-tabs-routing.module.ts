import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantryTabsPage } from './pantry-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PantryTabsPage,
    children: [
      {
        path: 'tickets',
        children: [
          {
            path: '',
            loadChildren: () => import('../tickets/tickets.module').then( m => m.TicketsPageModule)
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
          }
        ]
      },
      {
        path: 'markets',
        children: [
          {
            path: '',
            loadChildren: () => import('../markets/markets.module').then( m => m.MarketsPageModule)
          }
        ]
      },
      {
        path: '',
        loadChildren: () => import('../tickets/tickets.module').then( m => m.TicketsPageModule),
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('../tickets/tickets.module').then( m => m.TicketsPageModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantryTabsPageRoutingModule {}
