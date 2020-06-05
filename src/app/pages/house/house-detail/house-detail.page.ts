import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { HouseRecord } from 'src/app/models/house-record';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage implements OnInit {
  record: HouseRecord;
  isNew: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private location: Location
  ) { }

  ngOnInit() {
    this.record = new HouseRecord();
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
