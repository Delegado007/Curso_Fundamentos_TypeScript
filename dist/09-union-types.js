"use strict";
(() => {
    let userId;
    userId = 1212;
    userId = 'asfsgd';
    // declaramos una funcion en donde el parametro a recivir solo puede ser string o number
    function greeting(myText) {
        if (typeof myText === 'string') {
            // ts detecta al entrar a este scope que myText solo puede ser string por ende activa todos lo metodos para string en myText
            console.log(`string ${myText.toLocaleUpperCase()}`);
        }
        else {
            // ts detecta al entrar a este scope que myText solo puede ser number por ende activa todos lo metodos para number en myText
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('HolaSA');
    greeting(15.1549949);
})();
