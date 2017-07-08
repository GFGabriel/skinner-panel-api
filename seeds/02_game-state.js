
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game_states').del()
    .then(function () {
      // Inserts seed entries
      return knex('game_states').insert([
          {
              playerName: 'Geohen',
              gasLevel: 100,
              ventAmount: .01,
              resources: 0,
              filterCost: 10,
              filtersOwned: 0,
              autoOwned: 0,
              autoCost: 50,
              increasedBy: 0,
              secondGame: false,
              thirdGame: false,
              fourthGame: false,
          },
          {
              playerName: 'MXC Romano',
              gasLevel: 100,
              ventAmount: .03,
              resources: 0,
              filterCost: 10,
              filtersOwned: 2,
              autoOwned: 0,
              autoCost: 50,
              increasedBy: 0,
              secondGame: false,
              thirdGame: false,
              fourthGame: false,
          }
      ]);
    });
};
