(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'adfgds';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello)
  }
  hi('Franco')
  hi(null)
  function hiv2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello)
  }
  hiv2('Delegado')
  hiv2(null)
  const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  // optional chaining ?
  const dogName = adventurer.cat?.name;
  console.log(dogName);
  // expected output: Dinah

  console.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined
})()