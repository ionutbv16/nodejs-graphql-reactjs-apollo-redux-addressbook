import { gql, graphql } from 'react-apollo';
import PersonsList from './PersonsList';

const query = gql`
query PersonsList {
  persons {
    id
    name
    address
    email
    age
  }
}
`;

export default graphql(query, {
  props: ({ data }) => {
    
    return {
      loading: data.loading,
      persons: data.persons,
    };
  },
})(PersonsList);