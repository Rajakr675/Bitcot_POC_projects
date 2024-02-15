import bookshelf from '../config/bookshelf';
import Task from './task';
class Category extends bookshelf.Model<Category> {
  get tableName() { return 'categories'; }
  get hasTimestamps() { return true; }
  get autoIncrement() { return true; }

  initialize() {
    this.on('saving', (model, attributes, options) => {
      if (attributes.email) {
        attributes.email = attributes.email.toLowerCase();
      }
    });
  }

  task() {
    return this.hasMany(Task, 'task_id');
  }
}

export default Category;








// const bookshelf  = require('../config/bookshelf');

// const Category = bookshelf.model('Category',   {
//    tableName: 'categotries',
//    hasTimestamps: true,
//    autoIncrement: true,
//    initialize: function () {
//       this.on('saving', function (model, attributes, options) {
//          if( attributes.email){
//           attributes.email = attributes.email.toLowerCase();
//       }
//       });
//   },
//   task() {
//    return this.hasmany('Task', 'task_id')
//  }
//  });

//  module.exports = Category

 
