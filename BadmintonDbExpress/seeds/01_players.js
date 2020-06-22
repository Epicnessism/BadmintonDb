
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {player_id: "123e4567-e89b-12d3-a456-426614174000", given_name: 'Tony', family_name: 'Wang', birthday: '06/20/1997', level: 'C', hand: 'left', location: 'VA', institution: 'GMU'},
        {player_id: "101e4567-e89b-12d3-a456-426614174111", given_name: 'Gus', family_name: 'Walzer', birthday: '01/01/1987'},
        {player_id: "143e4567-e89b-12d3-a456-426614174033", given_name: 'Zoe', family_name: 'Xu', birthday: '06/20/1996', level: 'B', hand: 'right', location: 'VA', institution: 'GMU'},
        {player_id: "144e4567-e89b-12d3-a456-426614174001", given_name: 'Pralfah', family_name: 'SomethingLong', birthday: '06/20/1996', level: 'A', hand: 'right', location: 'VA', institution: 'GMU'},
        {player_id: "155e4567-e89b-12d3-a456-426614174009", given_name: 'Kyle', family_name: 'Lin', birthday: '01/20/1994', level: 'A', hand: 'right', location: 'VA'},
      ]);
    });
};
