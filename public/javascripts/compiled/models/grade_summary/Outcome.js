(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone'], function(_, _arg) {
    var Collection, Model, Outcome, _ref;

    Model = _arg.Model, Collection = _arg.Collection;
    return Outcome = (function(_super) {
      __extends(Outcome, _super);

      function Outcome() {
        _ref = Outcome.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Outcome.prototype.initialize = function() {
        Outcome.__super__.initialize.apply(this, arguments);
        this.set('friendly_name', this.get('display_name') || this.get('title'));
        return this.set('hover_name', (this.get('display_name') ? this.get('title') : void 0));
      };

      Outcome.prototype.status = function() {
        var mastery, score;

        if (this.scoreDefined()) {
          score = this.get('score');
          mastery = this.get('mastery_points');
          if (score >= mastery) {
            return 'mastery';
          } else if (score >= mastery / 2) {
            return 'near';
          } else {
            return 'remedial';
          }
        } else {
          return 'undefined';
        }
      };

      Outcome.prototype.roundedScore = function() {
        var score;

        score = this.get('score');
        if (_.isNumber(score)) {
          return Math.round(score * 100.0) / 100.0;
        } else {
          return null;
        }
      };

      Outcome.prototype.scoreDefined = function() {
        return _.isNumber(this.get('score'));
      };

      Outcome.prototype.percentProgress = function() {
        if (this.scoreDefined()) {
          return this.get('score') / this.get('points_possible') * 100;
        } else {
          return 0;
        }
      };

      Outcome.prototype.masteryPercent = function() {
        return this.get('mastery_points') / this.get('points_possible') * 100;
      };

      Outcome.prototype.toJSON = function() {
        return _.extend(Outcome.__super__.toJSON.apply(this, arguments), {
          status: this.status(),
          roundedScore: this.roundedScore(),
          scoreDefined: this.scoreDefined(),
          percentProgress: this.percentProgress(),
          masteryPercent: this.masteryPercent()
        });
      };

      return Outcome;

    })(Model);
  });

}).call(this);
