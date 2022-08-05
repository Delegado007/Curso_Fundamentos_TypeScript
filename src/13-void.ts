(() => {
  // trabajando con el retorno void de la funciones
  // forzamos que el valor retornado por la funcion sea de cierto tipo, en este caso de tipo string
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item
    });
    return total.toString();
  }
  // las funciones que no retornan nada van a ser de tipo void
  // el motor de inferencia de ts detecta que la funcion no retorna nada y la declara como tipo void
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`)
  }
  printTotal([1, 2, 5]);

  // de forma explicita ts nos dice que rta devuelve un string
  const rta = calcTotal([1, 2, 3, 5, 7, 8, 9]);
  console.log(rta)
})()