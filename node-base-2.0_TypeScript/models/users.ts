import bookshelf from '../config/bookshelf';
import Task from './task';
interface UserAttributes {
  id: number;
  // Add other properties here, if any
}

// interface User extends UserAttributes {}
// import { UserAttributes } from '../types/user_type';

class User extends bookshelf.Model<any> {
  get tableName(): string {
    return 'users';
  }

  get hasTimestamps(): boolean {
    return true;
  }

  get autoIncrement(): boolean {
    return true;
  }

  initialize(): void {
    this.on('saving', (model, attributes, options) => {
      if (attributes.email) {
        attributes.email = attributes.email.toLowerCase();
      }
    });
  }

  task(){
    return this.hasMany(Task);
  }
}

export default User;




// const bookshelf  = require('../config/bookshelf');
// const User = bookshelf.model('User',   {
//    tableName: 'users',
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
//    return this.hasMany('Task')
//  }
//  });

//  module.exports = User
