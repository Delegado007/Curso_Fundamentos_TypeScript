"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'M';
    shirtSize = 'XL';
    // shirtSize = 'sadf' falla la verificacion
    function greeting(userId, size) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`);
        }
    }
    greeting(1111, 'L');
})();
