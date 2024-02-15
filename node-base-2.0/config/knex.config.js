const knex = require('knex')({
   client: 'pg',
   connection: {
     host: "localhost",
     user: "postgres",
     password: "password",
     database: "base_pro",
     charset: 'utf8'
   },
   debug: "dev"
 });

 module.exports.knex = knex;