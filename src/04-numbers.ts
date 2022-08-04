(() => {
  let ProductPrice = 100;
  ProductPrice = 12;
  console.log('productPrice', ProductPrice);
  //forma inferida
  let customerAge: number = 28;
  customerAge = customerAge + '1';
  //con js puro devolveria 281

  let productInStock: number;
  console.log('productInStock', productInStock);
  //avisa para cuando se quiere usar una var no asignada aun
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discout', discount);
  if (productInStock <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff; // 4095
  console.log('hex', hex)
  let bin = 0b1010; // 10
  console.log('bin', bin)

  const myNumber: number = 10;
  // no usar el tipado Number en mayuscula xq sig otra cosa en js
})();