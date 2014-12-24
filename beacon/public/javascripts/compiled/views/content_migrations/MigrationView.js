(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore'], function(Backbone, _) {
    var MigrationView, _ref;

    return MigrationView = (function(_super) {
      __extends(MigrationView, _super);

      function MigrationView() {
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);        _ref = MigrationView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MigrationView.prototype.validateBeforeSave = function() {
        var validations,
          _this = this;

        validations = {};
        _.each(this.children, function(child) {
          if (child.validations) {
            return _.extend(validations, child.validations());
          }
        });
        return validations;
      };

      return MigrationView;

    })(Backbone.View);
  });

}).call(this);
