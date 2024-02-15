exports.up = function(knex) {
    return knex.raw(`
        CREATE MATERIALIZED VIEW users_materialized_view AS
        SELECT id, name, email
        FROM users;
    `);
};
 
exports.down = function(knex) {
    return knex.raw(`DROP MATERIALIZED VIEW IF EXISTS users_materialized_view;`);
};