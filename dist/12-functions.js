"use strict";
(() => {
    function createProdcutToJson(title, createAt, stock, size) {
        return {
            title,
            createAt,
            stock,
            size
        };
    }
    // al llamar a la funcion pide si o si que pasemos todos los parametros requeridos con sus tipados a la funcion
    const product1 = createProdcutToJson('P1', new Date(), 12, 'M');
    console.log(product1);
    console.log(product1.createAt);
    console.log(product1.size);
    // function v2 con size opcional al llamar a la funcion 
    const createProdcutToJsonV2 = (title, createAt, stock, size
    //campo size opcional con el optional chainig
    ) => {
        return {
            title,
            createAt,
            stock,
            size
        };
    };
    const product2 = createProdcutToJsonV2('P2', new Date(), 13);
    console.log(product2);
})();
