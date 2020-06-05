import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HouseRecord } from 'src/app/models/house-record';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.scss'],
})
export class HousePage {
  records: HouseRecord[] = [];
  constructor(private storage: Storage, private loading: LoadingService) { }

  ionViewWillEnter() {
    this.loading.present();
    this.loadRecords()
      .then(() => this.loading.dismiss()
    );
    const aux = new HouseRecord();
    aux.Electricity = 10;
    this.records.push(aux);
  }

  doRefresh(event) {
    this.loadRecords().then(x => event.target.complete());
  }

  stringify(record) {
    return JSON.stringify(record);
  }

  loadRecords() {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('HouseRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
        resolve();
      });
    });
  }
}
