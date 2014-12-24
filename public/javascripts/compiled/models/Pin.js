(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var Model, Pin, _ref;

    Model = _arg.Model;
    return Pin = (function(_super) {
      __extends(Pin, _super);

      function Pin() {
        _ref = Pin.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return Pin;

    })(Model);
  });

}).call(this);
