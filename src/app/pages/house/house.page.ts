import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HouseRecord } from 'src/app/models/house-record';
import { LoadingService } from '../../services/loading.service';
import { BaseListPage } from '../base/base-list.page';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.scss'],
})
export class HousePage extends BaseListPage {
  records: HouseRecord[] = [];

  constructor(public storage: Storage, public loading: LoadingService) {
    super(storage, loading);
  }

  loadRecords(): Promise<boolean> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('HouseRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
      });
      resolve();
    });
  }
}
