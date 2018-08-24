const { ApolloServer, mergeSchemas } = require('apollo-server-express');

const bookSetup = require ('./book/bookSetup');
const authorSetup = require ('./author/authorSetup');

module.exports = new ApolloServer({
  schema: mergeSchemas({
    schemas: [
      bookSetup,
      authorSetup,
    ]
  })
});