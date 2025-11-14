import { DigitalProduct } from "./models/DigitalProduct.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import {Product} from "./models/Product.js";
import {calculateTax} from "./utils/taxCalculator.js"


//testing to see if it works

// const notebook = new Product("1234-ID-Bling", "Journal", 15 );
// console.log(notebook.displayDetails());
// console.log(notebook.getPriceWithTax());

// For Physical Product

// const diary = new PhysicalProduct("1234-ID-Bling", "Diary", 15, 35 );
// console.log(diary.displayDetails());
// console.log(diary.getPriceWithTax());
// console.log(diary.weightToKg);

// const ebook = new DigitalProduct("1234-ID-Bling", "Diary", 15, 35, 45 );
// console.log(ebook.displayDetails());
// console.log(ebook.megaBytes);

// const envelope = number calculateTax("1234-ID-Bling", "Diary", 15, 35, 45 ); I dont know how to get this to work?
// const envelope = number taxCalculator("1234-ID-Bling", "Diary", 15, 35, 45 ); I dont know how to get this to work?
// console.log(calculateTax(envelope));