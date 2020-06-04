import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CarRecord } from '../../models/car-record.model';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  records: CarRecord[] = [];
  constructor(private router: Router, private storage: Storage, private loading: LoadingService) { }

  ngOnInit() {
    this.loading.present();
    this.loadRecords()
      .then(() => this.loading.dismiss()
    );
  }

  stringify(record) {
    return JSON.stringify(record);
  }

  loadRecords() {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('CarRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
        resolve();
      });
    });
  }

  doRefresh(event) {
    this.loadRecords().then(x => event.target.complete());
  }

}
