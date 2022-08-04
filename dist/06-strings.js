"use strict";
(() => {
    let productTitle = 'My amazing product';
    // productTitle = null
    // productTitle = () => {};
    // productTitle = 123;
    productTitle = 'My amazing prodcut changed';
    console.log('ProdcitTitle', productTitle);
    let price = 150;
    let isNew = true;
    const productDescription = "I'm bla bla bla isdfgoksfd";
    console.log('productDescription', productDescription);
    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${price}
    is new: ${isNew}
  `;
    console.log(`summary: ${summary}`);
    const myString = "asfsdg";
})();
