const config = require('../../knexfile');

const Knex = require('knex')(config['development']);
const Bookshelf = require('bookshelf')(Knex);

module.exports = Bookshelf;
