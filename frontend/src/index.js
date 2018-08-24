import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

import { gql } from 'apollo-boost';


const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

const GET_BOOKS = gql`
{
  books {
    id
    name
  }
}`

const App = () => (
    <Query
        query={GET_BOOKS}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            
            console.log('aaa', data)
            return data.books.map(({ id, name }) => (
                <div key={id}>
                    <p>{`${id}: ${name}`}</p>
                </div>
            ));
        }}
    </Query>
);

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(<ApolloApp />, document.getElementById("root"));