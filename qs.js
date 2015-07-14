(function(g) {
  var QS = g.QS = {};
  QS.parse = function(url) {
    var rv = {};
    if(url.indexOf('?') > -1) {
      url.match(/\?(.*)/)[1].split('&').forEach(function(pair) {
        var kv = pair.split('=').map(decodeURIComponent), k = kv[0], v = kv[1];
        if(! rv[k]) { rv[k] = []; }
        rv[k].push(v);
      });
    }
    return rv;
  };
})(this);
