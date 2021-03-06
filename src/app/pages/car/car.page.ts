import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CarRecord } from '../../models/car-record.model';
import { LoadingService } from '../../services/loading.service';
import { BaseListPage } from '../base/base-list.page';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage extends BaseListPage {
  records: CarRecord[] = [];

  constructor(public storage: Storage, public loading: LoadingService) {
    super(storage, loading);
  }

  loadRecords(): Promise<boolean> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('CarRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
      });
      resolve();
    });
  }

}
