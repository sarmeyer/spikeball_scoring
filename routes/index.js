var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spikeball' });
});
router.post('/create', function(req, res, next){
  console.log(req.body);
  // return knex('teams').insert(req.body).then(function(results) {
  //           res.redirect('/teams');
  //       })
})

module.exports = router;
