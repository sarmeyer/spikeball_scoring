module.exports = {
  runSeed: function(teams) {
    // sort players by win % first
    // then sort by point Differential
    function seedTeams(w, l, pf, pa){
      return (w+l) + (pf/(pf+pa))
    }
  }
}
