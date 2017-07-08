
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game_states', (table) => {
      table.increments();
      table.string('playerName');
      table.float('gasLevel');
      table.float('ventAmount');
      table.integer('resources');
      table.integer('filterCost');
      table.integer('filtersOwned');
      table.integer('autoOwned');
      table.integer('autoCost');
      table.integer('increasedBy');
      table.boolean('secondGame');
      table.boolean('thirdGame');
      table.boolean('fourthGame');
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game_state');
};
