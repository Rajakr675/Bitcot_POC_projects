import bookshelf from '../config/bookshelf';
import Category from './category';
import User from './users';
class Task extends bookshelf.Model<Task> {
  get tableName() {
    return 'tasks';
  }

  get hasTimestamps() {
    return true;
  }

  get autoIncrement() {
    return true;
  }

  initialize() {
    this.on('saving', (model, attributes, options) => {
      if (attributes.email) {
        attributes.email = attributes.email.toLowerCase();
      }
    });
  }

  user() {
    return this.belongsTo(User, 'user_id');
  }

  category() {
    return this.hasMany(Category);
  }
}

export default Task;






// const bookshelf  = require('../config/bookshelf');

// const Task = bookshelf.model('Task',   {
//    tableName: 'tasks',
//    hasTimestamps: true,
//    autoIncrement: true,
//    initialize: function () {
//       this.on('saving', function (model, attributes, options) {
//          if( attributes.email){
//           attributes.email = attributes.email.toLowerCase();
//       }
//       });
//   },
//   user() {
//    return this.belongsTo('User', 'user_id')
//  },
//  category() {
//    return this.hasmany('Category')
//  }
//  });

//  module.exports = Task

 
