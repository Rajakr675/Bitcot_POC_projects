const bookshelf  = require('../config/bookshelf');

const Category = bookshelf.model('Category',   {
   tableName: 'categotries',
   hasTimestamps: true,
   autoIncrement: true,
   initialize: function () {
      this.on('saving', function (model, attributes, options) {
         if( attributes.email){
          attributes.email = attributes.email.toLowerCase();
      }
      });
  },
  task() {
   return this.hasmany('Task', 'task_id')
 }
 });

 module.exports = Category

 
