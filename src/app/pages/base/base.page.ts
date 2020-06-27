import { Storage } from '@ionic/storage';
import { LoadingService } from '../../services/loading.service';

export abstract class BasePage {

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

  abstract loadRecords(): Promise<boolean>;
}
