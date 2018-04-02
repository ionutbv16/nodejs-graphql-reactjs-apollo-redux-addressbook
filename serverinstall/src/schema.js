

import {
    makeExecutableSchema,
    addMockFunctionsToSchema
  } from 'graphql-tools';

  import { resolvers } from './resolvers';


  const typeDefs = `
  type Person {
     id: ID!                # "!" denotes a required field
     name: String
     email: String
     address: String
     age: String
  }
  # This type specifies the entry points into our API. In this case
  # there is only one - "channels" - which returns a list of channels.
  type Query {
     persons: [Person]    # "[]" means this is a list of channels
  }

  # The mutation root type, used to define all mutations.
    type Mutation {
    # A mutation to add a new channel to the list of channels
    addPerson(name: String!, address: String, email: String, age: String ): Person
    }


  `;
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  //addMockFunctionsToSchema({ schema });
  export { schema };

 
 