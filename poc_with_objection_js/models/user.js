const Model = require('../utils/database');
const Book = require("./books");

class User extends Model {
  static get tableName() {
    return 'users'; // Corrected table name
  }

  static get userNameColumn() {
    return 'userName';
  }

  static get passwordColumn() {
    return 'password';
  }

  static get ageColumn() {
    return 'age'; // Corrected column name
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userName', 'password', 'age'],
      properties: {
        id: { type: 'integer' },
        userName: { type: 'string', minLength: 1, maxLength: 250 },
        password: { type: 'string' },
        age: { type: 'integer' },
      },
    };
  }

  static relationMappings = {
    books: {
      relation: Model.HasOneRelation, // You should use HasManyRelation if a user can have multiple books
      modelClass: Book,
      join: {
        from: 'users.id', // Corrected from column
        to: 'books.user_id',
      },
    },
  };
}

module.exports = User;
