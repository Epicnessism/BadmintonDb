
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {player_id_1A: 1, player_id_1B: 2, player_id_2A: 3, player_id_2B: 4, set_id: 1, points_1: 21, points_2: 17},
        {player_id_1A: 1, player_id_1B: 2, player_id_2A: 3, player_id_2B: 4, set_id: 1, points_1: 11, points_2: 21},
        {player_id_1A: 1, player_id_1B: 2, player_id_2A: 3, player_id_2B: 4, set_id: 1, points_1: 23, points_2: 21},
        {player_id_1A: 2, player_id_2A: 3, set_id: 2, tournament_id: 1, points_1: 13, points_2: 21},
        {player_id_1A: 1, player_id_2A: 4, set_id: 3, points_1: 1, points_2: 21},
        // {player_id_1A: 1, player_id_1B: 2, player_id_2A: 3, player_id_2B: 4, set_id: 4, points_1: 29, points_2: 27},
        // {player_id_1A: 2, player_id_2A: 3, set_id: 2, tournament_id: 1, points_1: 19, points_2: 21},
        // {player_id_1A: 1, player_id_1B: 2, player_id_2A: 3, player_id_2B: 4, set_id: 4, points_1: 11, points_2: 21},
      ]);
    });
};
