import { BaseRecord } from './base-record.model';

export class MarketRecord extends BaseRecord {
    Name: string;
    Address: string;

    load(json: string) {
        const data = JSON.parse(json);
        this.Id = data.Id;
        this.CreationDate = data.CreationDate;
        this.LastModDate = data.LastModDate;
        this.Name = data.Name;
        this.Address = data.Address;
    }
}
