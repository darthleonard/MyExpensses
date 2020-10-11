export class BasicProductRecord {
    Name: string;
    Price?: number;
    Bought = false;

    constructor(name: string, price?: number){
        this.Name = name;
        this.Price = price;
    }
}
