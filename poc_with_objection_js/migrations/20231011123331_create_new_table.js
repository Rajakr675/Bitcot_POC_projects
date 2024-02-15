/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users',(t)=>{
        t.increments('id').primary();
        t.string('userName').unique().notNullable();
        t.string('password').notNullable();
        t.integer('age').notNullable();
      });

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
  
};
