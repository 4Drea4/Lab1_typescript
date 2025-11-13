// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
 import {Product} from "./Product.js";



export class PhysicalProduct extends Product{
    weight:number;

    constructor (sku: string, name: string, price:number, weight:number) {
        super (sku, name, price);
        this.weight = weight;
        // this.price =price;
        
    }
//10 percent tax
    getPriceWithTax(taxDiscount: number = .10): number {
        
        return this.price + this.price * taxDiscount;

    }
    displayDetails():string{
        return `${super.displayDetails()} Weight: ${this.weight}`;
    }

// Creating a getter method to convert lbs to kg


}