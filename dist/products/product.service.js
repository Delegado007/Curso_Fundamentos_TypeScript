"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clacStock = exports.addPrduct = exports.products = void 0;
exports.products = [];
const addPrduct = (data) => {
    exports.products.push(data);
};
exports.addPrduct = addPrduct;
const clacStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.clacStock = clacStock;
