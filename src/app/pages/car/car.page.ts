import { Component, OnInit } from '@angular/core';
import { CarRecord } from '../../models/car-record.model';


@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  records: CarRecord[] = [];
  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log('open new page');
  }

  edit(record: any) {
    console.log(record);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
