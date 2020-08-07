
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
        table.integer('player_id').defaultTo(null);
        table.boolean('admin').notNullable().defaultTo(false);
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));

        table.foreign('player_id').references('id').inTable('players');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  