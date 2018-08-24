const bookService = require('../../services/book/bookService');

module.exports = {
  Query: {
    books: (obj, args) => bookService.all()
  },

  Book: {
    author(book) {
      return bookService.findAuthor(book.author);
    }
  }
};