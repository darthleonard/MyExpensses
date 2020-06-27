import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { CarRecord } from '../../../models/car-record.model';
import { BaseDetailPage } from '../../base/base-detail.page';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage extends BaseDetailPage {

  constructor(
    public activatedRoute: ActivatedRoute,
    public storage: Storage,
    public location: Location) {
    super(activatedRoute, storage, location);
  }

  recordInit() {
    this.record = new CarRecord();
  }
}
