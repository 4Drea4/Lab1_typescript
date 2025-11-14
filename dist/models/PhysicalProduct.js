import { Product } from "./Product.js";
// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
export class PhysicalProduct extends Product {
    // Add a weight property (number) for physical products.
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
        // this.price =price;
    }
    // Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
    getPriceWithTax(taxDiscount = .10) {
        return this.price + this.price * taxDiscount;
    }
    // Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
    displayDetails() {
        return `${super.displayDetails()} Weight: ${this.weight}`;
    }
    // Creating a getter method to convert lbs to kg
    get weightToKg() {
        const kg = this.weight * .45359237;
        //convert to number
        return `${kg.toFixed()} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map