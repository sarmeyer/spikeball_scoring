module.exports = {
  runSeed: function(w, l, pf, pa) {
    return Number(w + l) + Number((pf / (pf + pa)));
  }
}
