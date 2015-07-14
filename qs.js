(function(g) {
  function parse(url, rv) {
    var rv = rv || {};
    if(url.indexOf('?') > -1) {
      url.match(/\?(.*)/)[1].split('&').forEach(function(pair) {
        var kv = pair.split('=').map(decodeURIComponent), k = kv[0], v = kv[1];
        if(! rv[k]) { rv[k] = []; }
        rv[k].push(v);
      });
    }
    return rv;
  };
  g.QS = parse(g.location && g.location.search || "", parse);
})(this);
