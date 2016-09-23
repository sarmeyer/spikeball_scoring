var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Seeds = require('../lib/seedLogic.js');

router.get('/', function(req, res, next) {
  return knex('teams').then(function(teams) {
    Promise.all(
      teams.map(function(team) {
        return knex('team_game_stats').where('team_id', team.id).then(function(stats) {
          team.stats = stats;
          return team;
        })
      })
    ).then(function(teams) {
      return knex('teams').join('team_game_stats', 'teams.id', '=', 'team_game_stats.team_id').select('teams.id', 'teams.teamName', 'team_game_stats.seed', 'team_game_stats.wins', 'team_game_stats.losses', 'team_game_stats.pointDiff').orderBy('seed', 'desc').then(function(stats1){
      res.render('teams', {
        stats: stats1,
        teams: teams
      })
    })
  });
  })
})

router.get('/:teamid', function(req, res, next) {
  return knex('team_game_log').where('team1_id', req.params.teamid).orWhere('team2_id', req.params.teamid).then(function(logs) {
    return knex('teams').where('id', req.params.teamid).first().then(function(team) {
      Promise.all(
        logs.map(function(log) {
          if (Number(req.params.teamid) === log.team1_id) {
            return knex('teams').where('id', log.team2_id).then(function(opponent) {
              log.opponent = opponent;
              return log;
            })
          } else if(Number(req.params.teamid) === log.team2_id) {
            return knex('teams').where('id', log.team1_id).then(function(opponent) {
              log.opponent = opponent;
              return log;
            })
          }
        })).then(function(logs) {
        res.render('show', {
          logs: logs,
          team: team
        })
      })
    });
  })
})


module.exports = router;
