var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('teams').then(function(teams) {
    Promise.all(
      teams.map(function(team) {
        return knex('team_game_stats').where('team_id', team.id).then(function(stats) {
          team.stats = stats; //set property on team object to the stats data
          return team;
        })
      })
    ).then(function(teams) {
      res.render('teams', {
        teams: teams
      })
    })
  });
})

module.exports = router;
