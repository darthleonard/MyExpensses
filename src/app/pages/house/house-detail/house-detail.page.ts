import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { HouseRecord } from 'src/app/models/house-record';
import { BaseDetailPage } from '../../base/base-detail.page';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage extends BaseDetailPage {

  constructor(
    public activatedRoute: ActivatedRoute,
    public storage: Storage,
    public location: Location) {
    super(activatedRoute, storage, location);
  }

  recordInit() {
    this.record = new HouseRecord();
  }
}
