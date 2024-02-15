const Model = require('../utils/database');

class Books extends Model {
  static get tableName() {
    return 'books';
  }

  static get titleColumn() {
    return 'title';
  }

  static get user_idColumn() {
    return 'user_id'; // Corrected column name
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
        user_id: { type: 'integer' },
      },
    };
  }
}

module.exports = Books;





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>








































