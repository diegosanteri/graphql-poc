const authorService = require('./../author/authorService');

const books = [{
    id: 'b12345',
    name: 'Clean code',
    description: 'How to become a master of coding art',
    author: 'a23456'
}, {
    id: 'b12346',
    name: 'Clean architecture',
    description: 'How to become a master of coding art',
    author: 'a23456'
}, {
    id: 'b12347',
    name: 'Agile software development',
    description: 'How to become a master of coding art',
    author: 'a23456'
}, {
    id: 'b12348',
    name: 'Uml Java for programmers',
    description: 'How to become a master of coding art',
    author: 'a23456'
}, {
    id: 'b12349',
    name: 'Agile Principles',
    description: 'How to become a master of coding art',
    author: 'a23456'
}];

exports.all = (authorId) => {
    return authorId ? books.filter(b => b.author == authorId) : books;
};

exports.findAuthor = (authorId) => {
    return authorService.find(authorId);
};