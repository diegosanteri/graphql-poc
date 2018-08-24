const { makeExecutableSchema } = require('apollo-server-express');

const authorSchema  = require('./authorSchema.js');
const authorQuery = require('./authorQuery');
const authorResolver = require('./authorResolver');

module.exports = makeExecutableSchema({
    typeDefs: [authorSchema, authorQuery],
    resolvers: authorResolver
});