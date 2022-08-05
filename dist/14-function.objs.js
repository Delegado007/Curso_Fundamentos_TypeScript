"use strict";
(() => {
    // de esta forma podemos declarar de forma explicita que recive un objeto con campos especificos y de tipos especificos
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: "sokdhng@dosifgik.com",
        password: "1234656878"
    });
    const products = [];
    const addPrduct = (data) => {
        products.push(data);
    };
    addPrduct({
        title: 'Producto 1',
        createAt: new Date(1932, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
})();
