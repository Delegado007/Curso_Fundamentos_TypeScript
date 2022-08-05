(() => {
  // de esta forma podemos declarar de forma explicita que recive un objeto con campos especificos y de tipos especificos
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);
  }

  login({
    email: "sokdhng@dosifgik.com",
    password: "1234656878"
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addPrduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addPrduct({
    title: 'Producto 1',
    createAt: new Date(1932, 1, 1),
    stock: 12,
    size: 'XL'
  })

  console.log(products)
})()