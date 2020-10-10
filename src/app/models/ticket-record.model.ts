import { BaseRecord } from './base-record.model';
import { ProductRecord } from './product-record.model';

export class TicketRecord extends BaseRecord {
    PurchaseDate = new Date().toLocaleDateString();
    Products: ProductRecord[] = [];
    Total: number;

    load(json: string) {
        const data = JSON.parse(json);
        this.Id = data.Id;
        this.PurchaseDate = data.PurchaseDate;
        this.Products = data.Products;
        this.Total = data.Total;
    }
}
