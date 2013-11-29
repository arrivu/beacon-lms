(function() {
  require(['compiled/util/round'], function(round) {
    module("round");
    return test("round", function() {
      var x;

      x = 1234.56789;
      ok(round(x, 6) === x);
      ok(round(x, 5) === x);
      ok(round(x, 4) === 1234.5679);
      ok(round(x, 3) === 1234.568);
      ok(round(x, 2) === 1234.57);
      ok(round(x, 1) === 1234.6);
      return ok(round(x, 0) === 1235);
    });
  });

}).call(this);
