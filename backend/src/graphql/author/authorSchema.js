module.exports = () => [author, book];

const book = require('../book/bookSchema');

const author = `  
  type Author {
    id: ID!
    name: String!
    books: [Book]
}`


