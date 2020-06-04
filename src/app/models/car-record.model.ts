import { BaseRecord } from './base-record.model';

export class CarRecord extends BaseRecord {
    ConsumptionDate = new Date();
    Price0;
    Quantity;
    Distance;
}
