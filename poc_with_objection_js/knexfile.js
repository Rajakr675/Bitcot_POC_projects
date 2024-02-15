// knexfile.js

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'poc_objection_js',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

