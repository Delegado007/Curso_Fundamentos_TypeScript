import { addPrduct, clacStock, products } from "./product.service";

addPrduct({
  title: 'Prod1',
  createAt: new Date(1999, 2, 1),
  stock: 5
})
addPrduct({
  title: 'Prod2',
  createAt: new Date(1999, 2, 5),
  stock: 7,
  size: 'XL'
})

console.log(products);
const total = clacStock();
console.log(`hay en total ${total} prodcutos`);
