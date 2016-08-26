var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  return knex('teams').then(function(teams) {
    res.render('index', {
      title: 'Spikeball',
      teams: teams
    });
  })
});
router.post('/create', function(req, res, next) {
    var user1pts = req.body.undefined[0] - req.body.undefined[1];
    var user2pts = req.body.undefined[1] - req.body.undefined[0];
    return knex('team_game_log').insert({
      team1_id: req.body.team1_id,
      team2_id: req.body.team2_id,
      team1_score: req.body.undefined[0],
      team2_score: req.body.undefined[1]
    }).then(function() {
      res.redirect('/');
  })
})

module.exports = router;
