import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarRecord } from '../../models/car-record.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  records: CarRecord[] = [];
  constructor(private router: Router) { }

  ngOnInit() {

  }

  stringify(record) {
    return JSON.stringify(record);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
