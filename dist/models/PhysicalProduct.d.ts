import { Product } from ".models/Product.ts";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(price: number, taxDiscount?: number): number;
    displayDetails(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map