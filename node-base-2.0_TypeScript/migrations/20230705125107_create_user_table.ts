import  Knex  from 'knex';

export const up = async (Knex:any)=> {
  await Knex.schema.createTable('users', (table:any) => {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password');
    table.timestamps();
  });
};

export const down = async (Knex: Knex) => {
  await Knex.schema.dropTable('users');
};





// exports.up = function(knex) {
//    return knex.schema.createTable("users", (table) => {
//       table.increments()
//       table.string("name").notNullable();
//       table.string("email").notNullable();
//       table.string("password")
//       table.timestamps(); 
//     })
// };

// exports.down = function(knex) {
//    return knex.schema.dropTable("users")
// };
