import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create()
      .then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss();
          }
        });
      });
  }

  async dismiss() {
    this.isLoading = false;
    setTimeout(() => {
      return this.dismissLoading();
    }, 10);
  }

  private async dismissLoading() {
    return await this.loadingController.dismiss();
  }
}
