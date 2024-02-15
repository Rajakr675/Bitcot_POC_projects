'use strict';
const knex = require('./knex').knex;
const bookshelf = require('bookshelf')(knex);

// Initialize bookshelf once and use it from anywhere

module.exports = bookshelf;