const knex = require('knex')({
   client: 'pg',
   connection: {
     host : 'localhost',
     port : 3022,
     user : 'postgres',
     password : 'password',
     database : 'base_pro'
   },
       pool: {
         min: 2,
         max: 10
       },
       migrations: {
         tableName: 'knex_migrations'
       }
     },
 )
 
 module.exports=knex
 