import { Storage } from '@ionic/storage';
import { LoadingService } from '../../services/loading.service';

export class BasePage {

  constructor(public storage: Storage, public loading: LoadingService) { }

  ionViewWillEnter() {
    this.loading.present();
    this.loadRecords().then(() => this.loading.dismiss());
  }

  stringify(record) {
    return JSON.stringify(record);
  }

  doRefresh(event) {
    this.loadRecords().then(x => event.target.complete());
  }

  loadRecords() {
    return new Promise((resolve) => resolve());
  }
}
