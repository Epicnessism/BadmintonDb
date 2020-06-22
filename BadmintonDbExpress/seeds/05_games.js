
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {player_id_1A: 1, player_id_2A: 2, player_id_1B: 3, player_id_2B: 4, set_id: 1, points_A: 21, points_B: 17},
        {player_id_1A: 1, player_id_2A: 2, player_id_1B: 3, player_id_2B: 4, set_id: 1, points_A: 11, points_B: 21},
        {player_id_1A: 1, player_id_2A: 2, player_id_1B: 3, player_id_2B: 4, set_id: 1, points_A: 23, points_B: 21},
        {player_id_1A: 2, player_id_1B: 3, set_id: 2, tournament_id: 1, points_A: 13, points_B: 21},
        {player_id_1A: 1, player_id_1B: 4, set_id: 3, points_A: 1, points_B: 21},
        {player_id_1A: 1, player_id_2A: 2, player_id_1B: 3, player_id_2B: 4, set_id: 4, points_A: 29, points_B: 27},
        {player_id_1A: 2, player_id_1B: 3, set_id: 2, tournament_id: 1, points_A: 19, points_B: 21},
        {player_id_1A: 1, player_id_2A: 2, player_id_1B: 3, player_id_2B: 4, set_id: 4, points_A: 11, points_B: 21},
      ]);
    });
};
