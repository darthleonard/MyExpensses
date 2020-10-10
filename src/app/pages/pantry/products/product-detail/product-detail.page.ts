import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { ProductRecord } from 'src/app/models/product-record.model';
import { BaseDetailPage } from 'src/app/pages/base/base-detail.page';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage extends BaseDetailPage {

  constructor(public activatedRoute: ActivatedRoute,
              public storage: Storage,
              public location: Location) {
      super(activatedRoute, storage, location);
  }

  recordInit() {
    this.record = new ProductRecord();
  }

}
