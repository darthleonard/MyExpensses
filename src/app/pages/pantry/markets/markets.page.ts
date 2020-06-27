import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../../../services/loading.service';
import { MarketRecord } from 'src/app/models/market-record.model';
import { BasePage } from '../../base/base.page';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.page.html',
  styleUrls: ['./markets.page.scss'],
})
export class MarketsPage extends BasePage {
  records: MarketRecord[] = [];

  constructor(public storage: Storage, public loading: LoadingService) {
    super(storage, loading);
  }

  loadRecords(): Promise<boolean> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('MarketRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
        resolve();
      });
    });
  }

}
