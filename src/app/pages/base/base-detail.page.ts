import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { BaseRecord } from 'src/app/models/base-record.model';

export abstract class BaseDetailPage<T extends BaseRecord> {
  record: T;
  isNew: boolean;

  constructor(public activatedRoute: ActivatedRoute,
              public storage: Storage,
              public location: Location) {
    this.init();
  }

  init() {
    this.recordInit();
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

  abstract recordInit();

}
