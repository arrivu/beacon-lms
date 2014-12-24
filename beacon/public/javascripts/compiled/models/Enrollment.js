(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(_arg) {
    var Enrollment, Model, _ref;

    Model = _arg.Model;
    return Enrollment = (function(_super) {
      __extends(Enrollment, _super);

      function Enrollment() {
        _ref = Enrollment.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return Enrollment;

    })(Model);
  });

}).call(this);
