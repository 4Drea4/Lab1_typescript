// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
import { Product } from ".models/Product.ts";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
        // this.price =price;
    }
    //10 percent tax
    getPriceWithTax(price, taxDiscount = .10) {
        price: Number;
        return this.price + this.price * taxDiscount;
    }
    displayDetails() {
        return `${super.displayDetails()} Weight: ${this.weight}`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map