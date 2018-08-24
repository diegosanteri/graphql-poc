const authorService = require('../../services/author/authorService');

module.exports = {
  Query: {
    authors: (obj, args) => authorService.all(args)
  },
  Author: {
    books (author) {
      return authorService.findBooks(author);
    }
  }
};