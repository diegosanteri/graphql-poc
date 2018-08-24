const { makeExecutableSchema } = require('apollo-server-express');

const authorSchema = require ('../author/authorSchema');
const bookSchema = require('./bookSchema');
const bookQuery = require('./bookQuery');
const bookResolver = require('./bookResolver');
 
module.exports = makeExecutableSchema({
    typeDefs: [bookSchema, bookQuery],
    resolvers: bookResolver 
}); 