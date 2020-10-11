export class BasicProductRecord {
    Name: string;
    Price?: number;
    Quantity = 1;
    Bought = false;

    constructor(name: string, price?: number, quantity?: number){
        this.Name = name;
        this.Price = price;
        this.Quantity = quantity;
    }
}
