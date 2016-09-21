var math = require('../lib/seedLogic');

module.exports = {
  runMath: function(team1_stats, team2_stats) {
    var user1seed = math.runSeed(team1_stats.wins, team1_stats.losses, team1_stats.pointsFor, team1_stats.pointsAgainst);
    var user2seed = math.runSeed(team2_stats.wins, team2_stats.losses, team2_stats.pointsFor, team2_stats.pointsAgainst);
    return [user1seed, user2seed];
  }
}
