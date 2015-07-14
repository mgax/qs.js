(function(g) {
  var QS = g.QS = {};
  QS.parse = function(url) {
    var rv = {};
    if(url.indexOf('?') > -1) {
      url.match(/\?(.*)/)[1].split('&').forEach((pair) => {
        var [k, v] = pair.split('=').map(decodeURIComponent);
        if(! rv[k]) { rv[k] = []; }
        rv[k].push(v);
      });
    }
    return rv;
  };
})(this);
