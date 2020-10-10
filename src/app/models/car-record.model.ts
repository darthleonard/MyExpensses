import { BaseRecord } from './base-record.model';

export class CarRecord extends BaseRecord {
    ConsumptionDate = new Date().toISOString();
    Price: number;
    Quantity: number;
    Distance: number;

    load(json: string) {
        const data = JSON.parse(json);
        this.Id = data.Id;
        this.CreationDate = data.CreationDate;
        this.LastModDate = data.LastModDate;
        this.ConsumptionDate = data.ConsumptionDate;
        this.Price = data.Price;
        this.Quantity = data.Quantity;
        this.Distance = data.Distance;
    }
}
