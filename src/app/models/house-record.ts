import { BaseRecord } from './base-record.model';

export class HouseRecord extends BaseRecord {
    Period = new Date().toLocaleDateString();
    Rent: number;
    PaidTv: number;
    Water: number;
    Electricity: number;
    Gas: number;

    load(json: string) {
        const data = JSON.parse(json);
        this.Id = data.Id;
        this.CreationDate = data.CreationDate;
        this.LastModDate = data.LastModDate;
        this.Period = data.Period;
        this.Rent = data.Rent;
        this.PaidTv = data.PaidTv;
        this.Water = data.Water;
        this.Gas = data.Gas;
        this.Electricity = data.Electricity;
    }
}
