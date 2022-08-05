"use strict";
(() => {
    // let myNumber: number = undefined;
    // let myString: string = null;
    var _a, _b;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 12;
    let myString = undefined;
    myString = 'adfgds';
    function hi(name) {
        let hello = 'Hola ';
        if (name) {
            hello += name;
        }
        else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    hi('Franco');
    hi(null);
    function hiv2(name) {
        let hello = 'Hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()) || 'nobody';
        console.log(hello);
    }
    hiv2('Delegado');
    hiv2(null);
    const adventurer = {
        name: 'Alice',
        cat: {
            name: 'Dinah'
        }
    };
    // optional chaining ?
    const dogName = (_a = adventurer.cat) === null || _a === void 0 ? void 0 : _a.name;
    console.log(dogName);
    // expected output: Dinah
    console.log((_b = adventurer.someNonExistentMethod) === null || _b === void 0 ? void 0 : _b.call(adventurer));
    // expected output: undefined
})();
