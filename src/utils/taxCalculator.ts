import {Product} from ".src/models/Product.js";


// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.

// utility function
export function calculateTax(product: Product, taxDiscount: number = .15): number {
    const total = product.price + product.price * taxDiscount;
    return total;
}




// Add a function calculateTax() that accepts a Product object and returns the price including tax.