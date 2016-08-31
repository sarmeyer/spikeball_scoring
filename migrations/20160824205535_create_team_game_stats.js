exports.up = function(knex, Promise) {
  return knex.schema.createTable('team_game_stats', function(t){
    t.increments().primary();
    t.integer('team_id');
    t.integer('wins');
    t.integer('losses');
    t.integer('pointDiff');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('team_game_stats');
};
