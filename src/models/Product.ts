
// Properties: sku (string), name (string), price (number).

export class Product{
    sku:string;
    name:string;
    price:number;

    // Methods: displayDetails() - a method that returns a formatted string with the product’s details.
    constructor(sku:string, name:string, price:number){

        this.sku = sku;
        this.name = name;
        this.price =price;
    }
    displayDetails():string{
        return `Product: ${this.name} SKU: ${this.sku} is $${this.price}`;
    }
       
        // getPriceWithTax() - a method that calculates the final price of the product with tax.
    getPriceWithTax(taxDiscount: number = .15): number {
        return this.price + this.price * taxDiscount;

    }
}
