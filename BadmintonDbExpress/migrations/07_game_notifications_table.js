exports.up = function(knex) {
    return knex.schema.createTable('game_notifications', table => {
        table.increments('notif_id');
        table.integer('game_id').notNullable();
        table.integer('player_id').notNullable();
        table.timestamp('trigger_timestamp').defaultTo(knex.fn.now());
        table.boolean('verified').defaultsTo(false);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('game_notifications');
  };