module.exports = () => [book, author];

const author = require ('../author/authorSchema');

const book = `
type Book {
  id: ID!
  name: String!
  description: String,
  author: Author
}`;

