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

  addProduct(name: string, price: number, isNew?: boolean) {
    const product = new BasicProductRecord(name, price);
    this.record.Products.unshift(product);
    this.updateTotal();
  }

  deleteProduct(product: BasicProductRecord) {
    const idx = this.record.Products.indexOf(product);
    if (idx > -1) {
      this.record.Products.splice(idx, 1);
      this.updateTotal();
    }
  }

  checkProduct(product: BasicProductRecord) {
    product.Bought = !product.Bought;
  }

  updateTotal() {
    this.record.Total = 0;
    this.record.Products.filter(p => p.Bought).forEach(p => {
      this.record.Total += p.Price;
    });
  }

  async showProductAlert(product?: BasicProductRecord) {
    const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Save',
        handler: data => {
          const price = data.price.length === 0 ? 0 : parseFloat(data.price);
          const name = data.name;
          if (isNaN(price) || price < 0 || name.length < 1) {
            return false;
          }
          if (product === undefined) {
            this.addProduct(name, price);
          } else {
            product.Name = name;
            product.Price = price;
            this.updateTotal();
          }
          return true;
        }
      },
      {
        text: 'delete',
        handler: data => {
          this.deleteProduct(product);
        }
      },
    ];
    if (product === undefined) {
      alertButtons.pop();
    }

    const alert = await this.alertController.create({
      header: 'Product',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: product === undefined ? undefined : product.Name
        },
        {
          name: 'price',
          placeholder: 'Price',
          type: 'number',
          min: 0,
          value: product === undefined ? undefined : product.Price
        }
      ],
      buttons: alertButtons
    });

    await alert.present();
  }

}
