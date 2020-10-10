import { BaseRecord } from './base-record.model';
import { BasicProductRecord } from './basic-product-model';

export class TicketRecord extends BaseRecord {
    PurchaseDate = new Date().toLocaleDateString();
    Products: BasicProductRecord[] = [];
    Total = 0;

    load(json: string) {
        const data = JSON.parse(json);
        this.Id = data.Id;
        this.PurchaseDate = data.PurchaseDate;
        this.Products = data.Products;
        this.Total = data.Total;
    }
}
