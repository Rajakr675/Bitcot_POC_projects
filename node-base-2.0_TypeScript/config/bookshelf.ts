import knex from "knex";
import bookshelf from "bookshelf";

const knexInstance = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "base_pro",
    charset: "utf8",
  },
}); // Replace {...} with your Knex configuration

const bookshelfInstance = bookshelf(knexInstance);

// const knex = require('./knex.config').knex;
// const bookshelf = require('bookshelf')(knex);

// Initialize bookshelf once and use it from anywhere

export default bookshelfInstance;
