// Properties: sku (string), name (string), price (number).
export class Product {
    sku;
    name;
    price;
    // Methods: displayDetails() - a method that returns a formatted string with the product’s details.
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Product: ${this.name} SKU: ${this.sku}) is $${this.price}`;
    }
    // getPriceWithTax() - a method that calculates the final price of the product with tax.
    getPriceWithTax(taxDiscount = .15) {
        return this.price + this.price * taxDiscount;
    }
}
//# sourceMappingURL=Product.js.map