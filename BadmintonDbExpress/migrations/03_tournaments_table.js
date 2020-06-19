exports.up = function(knex) {
    return knex.schema.createTable('tournaments', table => {
        table.increments('id');
        table.uuid('tournament_id');
        table.string('tournament_name').notNullable();
        table.string('hosting_institution').notNullable();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.string('location');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tournaments');
  };