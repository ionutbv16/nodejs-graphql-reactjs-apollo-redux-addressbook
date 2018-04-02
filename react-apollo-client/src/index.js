import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, createBatchingNetworkInterface } from 'react-apollo';
import store from './store';
import Root from './layout';

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface,
});

const render = NextRoot  => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NextRoot />
        </ApolloProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

/**
 * Hot module reload
 */
if (module.hot) {
  module.hot.accept('./layout', () => render(require('./layout').default));
}