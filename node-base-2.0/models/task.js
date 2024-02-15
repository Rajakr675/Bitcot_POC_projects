const bookshelf  = require('../config/bookshelf');

const Task = bookshelf.model('Task',   {
   tableName: 'tasks',
   hasTimestamps: true,
   autoIncrement: true,
   initialize: function () {
      this.on('saving', function (model, attributes, options) {
         if( attributes.email){
          attributes.email = attributes.email.toLowerCase();
      }
      });
  },
  user() {
   return this.belongsTo('User', 'user_id')
 },
 category() {
   return this.hasmany('Category')
 }
 });

 module.exports = Task

 
