import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../../../services/loading.service';
import { TicketRecord } from 'src/app/models/ticket-record.model';
import { BaseListPage } from '../../base/base-list.page';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage extends BaseListPage {
  records: TicketRecord[] = [];

  constructor(public storage: Storage, public loading: LoadingService) {
    super(storage, loading);
  }

  loadRecords(): Promise<boolean> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.records = [];
      this.storage.forEach((value, key, index) => {
        if (key.indexOf('TicketRecord') >= 0) {
          this.records.push(JSON.parse(value));
        }
        resolve();
      });
    });
  }

}
