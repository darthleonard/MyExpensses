import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { BaseDetailPage } from 'src/app/pages/base/base-detail.page';
import { TicketRecord } from 'src/app/models/ticket-record.model';
import { AlertController } from '@ionic/angular';
import { BasicProductRecord } from 'src/app/models/basic-product-model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage extends BaseDetailPage<TicketRecord> {

  constructor(public activatedRoute: ActivatedRoute,
              public storage: Storage,
              public location: Location,
              public alertController: AlertController) {
    super(activatedRoute, storage, location);
  }

  recordInit() {
    this.record = new TicketRecord();
  }

  addProduct() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Product',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'price',
          placeholder: 'Price',
          type: 'number',
          min: -5
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            const product = new BasicProductRecord(data.name, data.price);
            this.record.Products.unshift(product);
            this.record.Total += parseInt(data.price, 10);
          }
        }
      ]
    });

    await alert.present();
  }

}
