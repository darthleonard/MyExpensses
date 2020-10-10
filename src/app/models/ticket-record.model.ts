import { BaseRecord } from './base-record.model';
import { ProductRecord } from './product-record.model';

export class TicketRecord extends BaseRecord {
    PurchaseDate = new Date();
    Products: ProductRecord[] = [];

    load(json: string) {
        const data = JSON.parse(json);
        this.PurchaseDate = data.PurchaseDate;
        this.Products = data.Products;
    }
}
