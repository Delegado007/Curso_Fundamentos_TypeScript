"use strict";
(() => {
    const products = [];
    const addPrduct = (data) => {
        products.push(data);
    };
    // para agregar un producto pide si o si seguir el schema de typado para producto y size es opcional
    addPrduct({
        title: 'Producto 10',
        createAt: new Date(1932, 1, 1),
        stock: 15,
        size: 'XL'
    });
    addPrduct({
        title: 'Producto 11',
        createAt: new Date(1932, 1, 2),
        stock: 1
    });
    console.log(products);
})();
