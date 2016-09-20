exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('team_game_stats').del(),

    knex('team_game_stats').insert({team_id: "1", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "2", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "3", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "4", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "5", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "6", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "7", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "8", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "9", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"}),
    knex('team_game_stats').insert({team_id: "10", wins: "0", losses: "0", "pointDiff": "0", "pointsFor": "0", "pointsAgainst": "0", seed: "0"})
  )
};
