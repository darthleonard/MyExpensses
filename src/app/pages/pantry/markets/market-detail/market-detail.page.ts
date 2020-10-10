import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { BaseDetailPage } from 'src/app/pages/base/base-detail.page';
import { MarketRecord } from 'src/app/models/market-record.model';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.page.html',
  styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage  extends BaseDetailPage {

  constructor(public activatedRoute: ActivatedRoute,
              public storage: Storage,
              public location: Location)
  {
    super(activatedRoute, storage, location);
  }

  recordInit() {
    this.record = new MarketRecord();
  }

}
