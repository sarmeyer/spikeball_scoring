var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('teams').then(function(teams) {
    res.render('index', {
      title: 'The 4th Annual Rocky Mountain Classic',
      teams: teams
    });
  })
});
router.post('/create', function(req, res, next) {
  var team1_score = req.body.undefined[0];
  var team2_score = req.body.undefined[1];
  var team1_id = req.body.team1_id;
  var team2_id = req.body.team2_id;
  var user1pts = req.body.undefined[0] - req.body.undefined[1];
  var user2pts = req.body.undefined[1] - req.body.undefined[0];
  function stats(team1_score, team2_score, team1_id, team2_id, user1pts, user2pts){
    return knex('team_game_stats').where('team_id', team1_id).select('pointDiff').first().then(function(results) {
      var pointDiff1 = results.pointDiff += user1pts;
      return knex('team_game_stats').where('team_id', team1_id).update('pointDiff', pointDiff1).then(function() {
        return knex('team_game_stats').where('team_id', team2_id).select('pointDiff').first().then(function(results2) {
          var pointDiff2 = results2.pointDiff += user2pts;
          return knex('team_game_stats').where('team_id', team2_id).update('pointDiff', pointDiff2).then(function() {
            res.redirect('/');
          })
        })
      })
    })
  }
  return knex('team_game_log').insert({
    team1_id: team1_id,
    team2_id: team2_id,
    team1_score: team1_score,
    team2_score: team2_score
  }).then(function() {
    if(team1_score > team2_score){
      return knex('team_game_stats').where('team_id', team1_id).increment('wins', 1).then(function(){
        return knex('team_game_stats').where('team_id', team2_id).increment('losses', 1).then(function(){
          stats(team1_score, team2_score, team1_id, team2_id, user1pts, user2pts);
        })
      })
    } else {
      return knex('team_game_stats').where('team_id', team2_id).increment('wins', 1).then(function(){
        return knex('team_game_stats').where('team_id', team1_id).increment('losses', 1).then(function(){
          stats(team1_score, team2_score, team1_id, team2_id, user1pts, user2pts);
        })
      })
    }
  })
})

module.exports = router;
