exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table){
    table.increments();
    table.string('teamName');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teams');
};
