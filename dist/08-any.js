"use strict";
(() => {
    // any hace referencia a que cualquier cosa puede ser almacenada en la let, const, var
    // no se aconseja usar
    // La utilidad de any radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    //podemos hacer cast
    // fomar 1
    myDynamicVar = 'Hola';
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
    // forma 2
    myDynamicVar = 1212;
    const rta2 = myDynamicVar.toFixed();
    console.log(rta2);
})();
