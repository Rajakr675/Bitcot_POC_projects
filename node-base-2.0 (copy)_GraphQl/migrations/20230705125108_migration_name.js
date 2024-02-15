
exports.up = function(knex) {
   return knex.schema.createTable("tasks", (table) => {
      table.increments()
      table.string("task_name").notNullable();
      table.string("description").notNullable();
      table.string("status")
      table.integer('user_id').references('id').inTable('users');
      table.timestamps(true, true); 
    })

    
};

exports.down = function(knex) {
   return knex.schema.dropTable("tasks")
  
};
