(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/models/DaySubstitution'], function(_, Backbone, DaySubstitution) {
    var DaySubstitutionCollection, _ref;

    return DaySubstitutionCollection = (function(_super) {
      __extends(DaySubstitutionCollection, _super);

      function DaySubstitutionCollection() {
        _ref = DaySubstitutionCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DaySubstitutionCollection.prototype.model = DaySubstitution;

      DaySubstitutionCollection.prototype.toJSON = function() {
        var _this = this;

        return this.reduce(function(memo, daySub) {
          return _.extend(memo, daySub.attributes);
        }, {});
      };

      return DaySubstitutionCollection;

    })(Backbone.Collection);
  });

}).call(this);
