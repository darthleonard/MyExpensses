import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../../../services/loading.service';
import { ProductRecord } from 'src/app/models/product-record.model';
import { BasePage } from '../../base/base.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage extends BasePage {
  records: ProductRecord[] = [];

  constructor(public storage: Storage, public loading: LoadingService) {
    super(storage, loading);
  }

  loadRecords(): Promise<boolean> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('ProductRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
        resolve();
      });
    });
  }

}
