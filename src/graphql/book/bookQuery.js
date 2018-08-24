const query = `
type Query {
    books(limit: Int): [Book]
}`;

module.exports = query