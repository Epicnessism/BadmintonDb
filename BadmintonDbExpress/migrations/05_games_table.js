exports.up = function(knex) {
    return knex.schema.createTable('games', table => {
        table.increments('game_id');
        table.integer('player_id_1A').notNullable();
        table.integer('player_id_2A').defaultTo(null);
        table.integer('player_id_1B').notNullable();
        table.integer('player_id_2B').defaultTo(null);
        table.integer('set_id').notNullable();
        table.integer('tournament_id').defaultTo(null);

        table.foreign('player_id_1A').references('id').inTable('players');
        table.foreign('player_id_2A').references('id').inTable('players');
        table.foreign('player_id_1B').references('id').inTable('players');
        table.foreign('player_id_2B').references('id').inTable('players');

        table.foreign('tournament_id').references('tournament_id').inTable('tournaments');

        table.integer('points_A').notNullable();
        table.integer('points_B').notNullable();

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('games');
  };