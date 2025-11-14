import {Product} from "../models/Product.js";


// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.

// utility function
export function calculateTax(product: Product, taxDiscount: number = .15): number {

    // Add a function calculateTax() that accepts a Product object and returns the price including tax.
    const total = product.price + product.price * taxDiscount;
    return total;
}




