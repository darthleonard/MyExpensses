import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetailPageRoutingModule } from './house-detail-routing.module';

import { HouseDetailPage } from './house-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetailPageRoutingModule
  ],
  declarations: [HouseDetailPage]
})
export class HouseDetailPageModule {}
