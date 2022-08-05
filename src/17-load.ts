import _ from 'lodash';
// como la libreria lodash no tiene soporte de ts no puede ayudar vs con el autocompletado

const data = [
  {
    username: 'Franco',
    role: 'admin'
  },
  {
    username: 'Flor',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  },
  {
    username: 'micaela',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)
// agrupa el objeto por roles