import { BaseRecord } from './base-record.model';
import { ProductRecord } from './product-record.model';

export class TicketRecord extends BaseRecord {
    PurchaseDate = new Date();
    Products: ProductRecord[] = [];
}
