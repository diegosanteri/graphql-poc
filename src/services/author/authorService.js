
const bookService = require('./../book/bookService');

const authors = [{
    id: 'a23456',
    name: 'Uncle Bob',
    books: ['b12346', 'b12347', 'b12348', 'b12349']
}];

exports.all = () => {
    return authors
};


exports.find = (author) => {
    return authors.filter(a => a.id == author)[0];
};

exports.findBooks = (author) => {
    return bookService.all(author.id);
};
