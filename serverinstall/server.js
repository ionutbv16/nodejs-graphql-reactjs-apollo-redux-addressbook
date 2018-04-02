import express from 'express';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';
import cors from 'cors';

const PORT = 4000;

const server = express();

//FIXES CORS ERROR
const whitelist = [
  // Allow domains here
  'http://localhost:3005',
];
const corsOptions = {
  origin(origin, callback){
      const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema:schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));



server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
