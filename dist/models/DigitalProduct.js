import { Product } from "./Product.js";
import { PhysicalProduct } from "./PhysicalProduct.js";
// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
export class DigitalProduct extends Product {
    // Add a fileSize property (number) for digital products.
    fileSize;
    constructor(sku, name, price, weight, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
    getPriceWithTax(taxDiscount = 0) {
        return this.price + this.price * taxDiscount;
    }
    // Use a getter method to return the formatted file size in megabytes.
    get megaBytes() {
        return `${this.displayDetails()} File size: ${this.fileSize} megabytes`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map