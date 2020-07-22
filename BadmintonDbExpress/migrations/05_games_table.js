exports.up = function(knex) {
    return knex.schema.createTable('games', table => {
        table.increments('game_id');
        table.integer('player_id_1A').notNullable();
        table.integer('player_id_1B').defaultTo(null);
        table.integer('player_id_2A').notNullable();
        table.integer('player_id_2B').defaultTo(null);
        table.integer('set_id').notNullable();
        table.integer('tournament_id').defaultTo(null);

        table.foreign('player_id_1A').references('id').inTable('players');
        table.foreign('player_id_2A').references('id').inTable('players');
        table.foreign('player_id_1B').references('id').inTable('players');
        table.foreign('player_id_2B').references('id').inTable('players');

        table.foreign('tournament_id').references('tournament_id').inTable('tournaments');

        table.integer('points_1').notNullable();
        table.integer('points_2').notNullable();

        table.timestamp('manual_timestamp').defaultTo(knex.fn.now());

        table.timestamps(true,true);


    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('games');
  };