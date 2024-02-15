const bookshelf  = require('../config/bookshelf');

const User = bookshelf.model('User',   {
   tableName: 'users',
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
   return this.hasMany('Task')
 }

 });

 module.exports = User
