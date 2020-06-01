import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarRecord } from '../../../models/car-record.model';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {
  record: CarRecord;
  isNew: boolean;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.record) {
      this.record = (JSON.parse(this.activatedRoute.snapshot.params.record));;
    } else {
      this.record = new CarRecord();
      this.isNew = true;
    }
  }

  save() {
    if (this.isNew) {
      console.log('save record');
    } else {
      console.log('update record');
    }
  }

  delete() {
    console.log('delete record');
  }
}
