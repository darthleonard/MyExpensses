export class BasicProductRecord {
    Name: string;
    Price?: number;

    constructor(name: string, price?: number){
        this.Name = name;
        this.Price = price;
    }
}
