// separamos el scope para que no interfiera el sobrenombramiento de vars con otros archivos
(() => {
  //forma explicita o inferida
  let isEnable = true;
  // isEnable = 'as';
  // isEnable = 1212;
  isEnable = false;
  //forma Explicita
  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  // isNew = random >= 0.5 ? 'true' : 'false'
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

})()