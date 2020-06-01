import { BaseRecord } from './base-record.model';

export class CarRecord extends BaseRecord {
    ConsumptionDate: Date;
    Price: number;
    Quantity: number;
    Distance: number;
}
