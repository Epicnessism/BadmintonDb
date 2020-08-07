
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('game_notifications').del()
      .then(function () {
        // Inserts seed entries
        return knex('game_notifications').insert([
          {game_id: 1, player_id: 1},
          {game_id: 1, player_id: 2},
          {game_id: 1, player_id: 3},
          {game_id: 1, player_id: 4},
          {game_id: 2, player_id: 1},
          {game_id: 2, player_id: 2},
          {game_id: 2, player_id: 3},
          {game_id: 2, player_id: 4},
          {game_id: 3, player_id: 1},
          {game_id: 3, player_id: 2},
          {game_id: 3, player_id: 3},
          {game_id: 3, player_id: 4},
          {game_id: 4, player_id: 2},
          {game_id: 4, player_id: 3},
          {game_id: 5, player_id: 1},
          {game_id: 5, player_id: 4},
        ]);
      });
  };
  