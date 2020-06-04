import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { CarRecord } from '../../../models/car-record.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {
  record: CarRecord;
  isNew: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private location: Location) { }

  ngOnInit() {
    this.record = new CarRecord();
    if (this.activatedRoute.snapshot.params.record) {
      this.record.load(this.activatedRoute.snapshot.params.record);
    }
    this.isNew = this.record.isNew();
  }

  save() {
    this.record.save(this.storage);
    this.location.back();
  }

  delete() {
    this.record.delete(this.storage);
    this.location.back();
  }
}
