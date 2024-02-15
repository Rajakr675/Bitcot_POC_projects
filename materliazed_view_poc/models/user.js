const bookshelf = require('../config/bookshelf');

const User = bookshelf.model('User', {
  tableName: 'users',
  hasTimestamps: true,
  autoIncrement: true,
}, {
  findDataFromMaterializedView: async function(id) {
    try {
      const data = await bookshelf.knex.raw(`SELECT * FROM users_materialized_view WHERE id = ?`, [id]);
      return data.rows[0];
    } catch (error) {
      throw new Error(`Failed to fetch data from materialized view: ${error.message}`);
    }
  }
});

module.exports = User;
