import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { Product } from "./models/Product.ts";
// import {DigitalProduct} from "./models/DigitalProduct.js";
//testing to see if it works
const notebook = new Product("1234-ID-Bling", "Journal", 15);
console.log(notebook.displayDetails());
console.log(notebook.getPriceWithTax());
// For Physical Product
const diary = new PhysicalProduct("1234-ID-Bling", "Diary", 15, 35);
console.log(notebook.displayDetails());
console.log(notebook.getPriceWithTax());
//# sourceMappingURL=main.js.map