import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://immense-hollows-78338.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query getUser {
        getUser(id: "6") {
          id
          username
          flowrate
          weeklyAverageShowerTime
          weeklyAverageWaterUsage
          thirtydayAverageShowerTime
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
