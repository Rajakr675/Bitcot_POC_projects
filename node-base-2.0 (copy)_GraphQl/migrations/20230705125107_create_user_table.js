
exports.up = function(knex) {
   return knex.schema.createTable("users", (table) => {
      table.increments()
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password")
      table.timestamps(); 
    })
};

exports.down = function(knex) {
   return knex.schema.dropTable("users")
};
