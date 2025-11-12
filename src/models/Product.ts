


// Properties: sku (string), name (string), price (number).

class Product{
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
        return `Product: ${this.name} SKU: ${this.sku}) - $${this.price}`;
    }
       
        // getPriceWithTax() - a method that calculates the final price of the product with tax.
    getPriceWithTax(){


    }


}