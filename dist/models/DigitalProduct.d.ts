import { Product } from "./Product.js";
export declare class DigitalProduct extends Product {
    fileSize: number;
    constructor(sku: string, name: string, price: number, weight: number, fileSize: number);
    getPriceWithTax(taxDiscount?: number): number;
    get megaBytes(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map