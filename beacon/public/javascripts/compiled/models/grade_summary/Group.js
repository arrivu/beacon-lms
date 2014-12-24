(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/util/natcompare'], function(_, _arg, natcompare) {
    var Collection, Group, Model, _ref;

    Model = _arg.Model, Collection = _arg.Collection;
    return Group = (function(_super) {
      __extends(Group, _super);

      function Group() {
        _ref = Group.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Group.prototype.initialize = function() {
        return this.set('outcomes', new Collection([], {
          comparator: natcompare.byGet('friendly_name')
        }));
      };

      Group.prototype.count = function() {
        return this.get('outcomes').length;
      };

      Group.prototype.statusCount = function(status) {
        return this.get('outcomes').filter(function(x) {
          return x.status() === status;
        }).length;
      };

      Group.prototype.mastery_count = function() {
        return this.statusCount('mastery');
      };

      Group.prototype.remedialCount = function() {
        return this.statusCount('remedial');
      };

      Group.prototype.undefinedCount = function() {
        return this.statusCount('undefined');
      };

      Group.prototype.status = function() {
        if (this.remedialCount() > 0) {
          return "remedial";
        } else {
          if (this.mastery_count() === this.count()) {
            return "mastery";
          } else if (this.undefinedCount() === this.count()) {
            return "undefined";
          } else {
            return "near";
          }
        }
      };

      Group.prototype.started = function() {
        return true;
      };

      Group.prototype.toJSON = function() {
        return _.extend(Group.__super__.toJSON.apply(this, arguments), {
          count: this.count(),
          mastery_count: this.mastery_count(),
          started: this.started(),
          status: this.status()
        });
      };

      return Group;

    })(Model);
  });

}).call(this);
