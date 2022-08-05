(() => {
  type UserId = string | number;
  let userId: UserId;


  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'XL';
  // shirtSize = 'sadf' falla la verificacion

  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting(1111, 'L');
})()