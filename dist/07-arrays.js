"use strict";
(() => {
    // detecta que es un array pero que solo contiene numeros!
    let prices = [1, 2, 3, 5, 4, 6, 78, 4, 6];
    // prices.push('asad')
    // prices.push(true)
    // prices.push({})
    prices.push(5);
    // aqui la inferencia de ts detecta que el array puede contener numbers string y boolean
    let prices2 = [1, 2, 3, 5, 4, 6, 78, 4, 6, true, "Hola"];
    // para trabajar con arrays que contengan datos mixtos sin que el motor de inferencia de ts intervenga
    let mixed = ['Hola', true];
    mixed.push(542);
    // mixed.push({}) el motor de ts advierte sobre un tipo de dato no declarado como admitido en mixed
    // mixed.push([]) el motor de ts advierte sobre un tipo de dato no declarado como admitido en mixed
    mixed.push('sdoifhgidf');
    let numbers = [1, 24556, 45, 4, 46, 4, 8, 94, 65, 564, 6, 5];
    // nos deja multiplicar sin problemas ya que detecta que el array number solo contiene numeros
    numbers.map(item => item ** 2);
})();
