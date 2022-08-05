import { Product } from "./product.model";

export const products: Product[] = [];

export const addPrduct = (data: Product) => {
  products.push(data)
}

export const clacStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
}