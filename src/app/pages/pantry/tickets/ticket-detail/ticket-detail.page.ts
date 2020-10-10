import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { BaseDetailPage } from 'src/app/pages/base/base-detail.page';
import { TicketRecord } from 'src/app/models/ticket-record.model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage extends BaseDetailPage {

  constructor(public activatedRoute: ActivatedRoute,
              public storage: Storage,
              public location: Location) {
    super(activatedRoute, storage, location);
  }

  recordInit() {
    this.record = new TicketRecord();
  }

}
