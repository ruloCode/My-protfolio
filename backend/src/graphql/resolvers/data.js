const users =[
  {
    id: 1,
    name: 'Camilo',
    cars: [1,2]
  },
  {
    id: 2,
    name: 'Andres',
    cars: [3]

  },
  {
    id: 3,
    name: 'Pedro',
    cars: []
  }
];

const cars = [
  {
    id: 1,
    make: 'something',
    model: 'new new',
    color: 'bluea',
    ownedBy: 1,
  },
  {
    id: 2,
    make: 'something',
    model: 'new new new',
    color: 'blueas',
    ownedBy: 2,
  },
  {
    id: 2,
    make: 'something',
    model: 'new new new super',
    color: 'red',
    ownedBy: 3,
  },
];

module.exports = {
  users,
  cars
}
