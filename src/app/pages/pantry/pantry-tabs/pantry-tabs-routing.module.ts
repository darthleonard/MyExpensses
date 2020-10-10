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
        path: 'ticket-detail',
        loadChildren: () => import('../tickets/ticket-detail/ticket-detail.module').then( m => m.TicketDetailPageModule)
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
        path: 'product-detail',
        loadChildren: () => import('../products/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
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
        path: 'market-detail',
        loadChildren: () => import('../markets/market-detail/market-detail.module').then( m => m.MarketDetailPageModule)
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
