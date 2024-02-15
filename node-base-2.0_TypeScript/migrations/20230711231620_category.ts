import * as Knex from "knex";

export async function up(Knex: Knex){
  await Knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("category_name").notNullable();
    table.integer('task_id').references('id').inTable('tasks');
    table.integer('user_id').references('id').inTable('users');
    table.timestamps(true, true);
  });
};

export async function down(Knex: Knex){
  await Knex.schema.dropTable("categories");
};











// exports.up = function(knex) {
//    return knex.schema.createTable("categotries", (table) => {
//       table.increments()
//       table.string("category_name").notNullable();
//       table.integer('task_id').references('id').inTable('tasks');
//       table.integer('user_id').references('id').inTable('users');
//       table.timestamps(true);
//     })
  
// };

// exports.down = function(knex) {
//   return knex.schema.dropTable("categotries")
// };
