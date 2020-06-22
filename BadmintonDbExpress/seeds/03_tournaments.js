
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tournaments').del()
    .then(function () {
      // Inserts seed entries
      return knex('tournaments').insert([
        {tournament_name: "GMU Spring OPEN 2019", hosting_institution: "GMU", start_date: "04/10/2019", end_date: "04/15/2019", location: "GMU RAC"},
        {tournament_name: "UVA Spring OPEN 2020", hosting_institution: "UVA", start_date: "02/03/2020", end_date: "02/05/2020", location: "UVA GYM"},
      ]);
    });
};
