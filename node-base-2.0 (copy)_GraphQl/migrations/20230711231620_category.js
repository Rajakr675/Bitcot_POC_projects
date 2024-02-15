
exports.up = function(knex) {
   return knex.schema.createTable("categotries", (table) => {
      table.increments()
      table.string("category_name").notNullable();
      table.integer('task_id').references('id').inTable('tasks');
      table.integer('user_id').references('id').inTable('users');
      table.timestamps(true);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable("categotries")
};
