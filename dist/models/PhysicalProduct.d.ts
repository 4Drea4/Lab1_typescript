import { Product } from "./Product.js";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(taxDiscount?: number): number;
    displayDetails(): string;
    get weightToKg(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map