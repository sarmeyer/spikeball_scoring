module.exports = {
  runSeed: function(teams) {
    teams.forEach(function(team) {
      seedTeams(team.stats[0].wins, team.stats[0].losses, team.stats[0].pointsFor, team.stats[0].pointsAgainst);
    })

    function seedTeams(w, l, pf, pa) {
      var seed = (w + l) + (pf / (pf + pa));
      console.log(seed);
    }
  }
}
