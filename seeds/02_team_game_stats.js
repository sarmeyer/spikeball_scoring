exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('team_game_stats').del(),

    knex('team_game_stats').insert({team_id: "1", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "2", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "3", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "4", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "5", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "6", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "7", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "8", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "9", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"}),
    knex('team_game_stats').insert({team_id: "10", "gamesPlayed": "0", wins: "0", losses: "0", "pointDiff": "0"})
  )
};
