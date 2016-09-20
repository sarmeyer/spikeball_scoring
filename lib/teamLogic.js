var math = require('../lib/seedLogic');
module.exports = {
  runMath: function(team1, team2, team1_stats, team2_stats) {
    var user1seed = math.runSeed(team1_stats.wins, team1_stats.losses)
  }
}
