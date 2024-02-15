import * as Knex from "knex";

export const up = async (Knex: Knex) => {
  return Knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.string("task_name").notNullable();
    table.string("description").notNullable();
    table.string("status");
    table.integer("user_id").references("id").inTable("users");
    table.timestamps(true, true);
  });
};

export const down = async (Knex: Knex) => {
  return Knex.schema.dropTable("tasks");
};



// exports.up = function(knex) {
//    return knex.schema.createTable("tasks", (table) => {
//       table.increments()
//       table.string("task_name").notNullable();
//       table.string("description").notNullable();
//       table.string("status")
//       table.integer('user_id').references('id').inTable('users');
//       table.timestamps(true, true); 
//     })

    
// };

// exports.down = function(knex) {
//    return knex.schema.dropTable("tasks")
  
// };
