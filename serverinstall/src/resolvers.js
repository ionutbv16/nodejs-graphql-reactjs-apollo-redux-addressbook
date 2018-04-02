
const persons = [
    {
    "id": "1",
    "name": "John Doe",
    "email": "john@gmail.com",
    "address": "Address John Doe",
    "age": 36
  },
  {
    "id": "2",
    "name": "Keith Wilson",
    "email": "kieth@gmail.com",
    "address": "Address Keith Wilson",
    "age": 90
  },
  {
    "id": "3",
    "name": "Tom Jones",
    "email": "tom@gmail.com",
    "address": "Address Tom Jones",
    "age": 23
  },
  {
    "id": "4",
    "name": "Jen Thompson",
    "email": "jen@gmail.com",
    "address": "Address Jen Thompson",
    "age": 22
  }
];

let nextId = 5;

export const resolvers = {
  Query: {
    persons: () => {
      return persons;
    },
  },
  Mutation: {
    addPerson: (root, args) => {
      const newPerson = { id: nextId++, name: args.name, email: args.email, address: args.address, age: args.age };
      console.log(newPerson);
      persons.push(newPerson);
      return newPerson;
    },
  },
};