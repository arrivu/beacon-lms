(function() {
  define(['jquery', 'jquery.instructure_misc_plugins'], function(jQuery) {
    var $;

    $ = jQuery;
    module('instructure misc plugins');
    test('showIf', function() {
      var el;

      el = $('<input type="checkbox" id="checkbox1">').appendTo("#fixtures");
      el.showIf(function() {
        return true;
      });
      equal(el.is(":visible"), true, 'should show if callback returns true');
      el.showIf(function() {
        return false;
      });
      equal(el.is(":visible"), false, 'should be hidden if callback returns false');
      el.showIf(true);
      equal(el.is(":visible"), true, 'should show if true as argument');
      el.showIf(false);
      equal(el.is(":visible"), false, 'should not show if false as argument');
      el.showIf(true);
      equal(el.is(":visible"), true);
      ok(el.showIf(function() {
        return true;
      }) === el);
      ok(el.showIf(function() {
        return false;
      }) === el);
      ok(el.showIf(true) === el);
      ok(el.showIf(false) === el);
      el.showIf(function() {
        ok(this.nodeType);
        return notEqual(this.constructor, jQuery);
      });
      return el.remove();
    });
    return test('disableIf', function() {
      var el;

      el = $('<input type="checkbox" id="checkbox1">').appendTo($("#fixtures"));
      el.disableIf(function() {
        return true;
      });
      equal(el.is(":disabled"), true);
      el.disableIf(function() {
        return false;
      });
      equal(el.is(":disabled"), false);
      el.disableIf(function() {
        return true;
      });
      equal(el.is(":disabled"), true);
      el.disableIf(false);
      equal(el.is(":disabled"), false);
      el.disableIf(true);
      equal(el.is(":disabled"), true);
      equal(el.disableIf(function() {
        return true;
      }), el);
      equal(el.disableIf(function() {
        return false;
      }), el);
      equal(el.disableIf(true), el);
      equal(el.disableIf(false), el);
      return el.remove();
    });
  });

}).call(this);
