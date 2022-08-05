"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addPrduct)({
    title: 'Prod1',
    createAt: new Date(1999, 2, 1),
    stock: 5
});
(0, product_service_1.addPrduct)({
    title: 'Prod2',
    createAt: new Date(1999, 2, 5),
    stock: 7,
    size: 'XL'
});
console.log(product_service_1.products);
const total = (0, product_service_1.clacStock)();
console.log(`hay en total ${total} prodcutos`);
