import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantryTabsPageRoutingModule } from './pantry-tabs-routing.module';

import { PantryTabsPage } from './pantry-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantryTabsPageRoutingModule
  ],
  declarations: [PantryTabsPage]
})
export class PantryTabsPageModule {}
