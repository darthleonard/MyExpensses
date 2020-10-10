import { BaseRecord } from './base-record.model';

export class ProductRecord extends BaseRecord {
    Name: string;
    Brand: string;

    load(json: string) {
        const data = JSON.parse(json);
        this.Id = data.Id;
        this.Name = data.Name;
        this.Brand = data.Brand;
    }
}
