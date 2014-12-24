(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jquery', 'i18n!assignments'], function(Backbone, _, $, I18n) {
    var DateGroup, _ref;

    return DateGroup = (function(_super) {
      __extends(DateGroup, _super);

      function DateGroup() {
        _ref = DateGroup.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DateGroup.prototype.defaults = {
        title: I18n.t('everyone_else', 'Everyone else'),
        due_at: null,
        unlock_at: null,
        lock_at: null
      };

      DateGroup.prototype.dueAt = function() {
        var dueAt;

        dueAt = this.get("due_at");
        if (dueAt) {
          return Date.parse(dueAt);
        } else {
          return null;
        }
      };

      DateGroup.prototype.unlockAt = function() {
        var unlockAt;

        unlockAt = this.get("unlock_at");
        if (unlockAt) {
          return Date.parse(unlockAt);
        } else {
          return null;
        }
      };

      DateGroup.prototype.lockAt = function() {
        var lockAt;

        lockAt = this.get("lock_at");
        if (lockAt) {
          return Date.parse(lockAt);
        } else {
          return null;
        }
      };

      DateGroup.prototype.now = function() {
        var now;

        now = this.get("now");
        if (now) {
          return Date.parse(now);
        } else {
          return new Date();
        }
      };

      DateGroup.prototype.alwaysAvailable = function() {
        return !this.unlockAt() && !this.lockAt();
      };

      DateGroup.prototype.pending = function() {
        var unlockAt;

        unlockAt = this.unlockAt();
        return unlockAt && unlockAt > this.now();
      };

      DateGroup.prototype.available = function() {
        return this.alwaysAvailable() || (!this.lockAt() && this.unlockAt() < this.now());
      };

      DateGroup.prototype.open = function() {
        return this.lockAt() && !this.pending() && !this.closed();
      };

      DateGroup.prototype.closed = function() {
        var lockAt;

        lockAt = this.lockAt();
        return lockAt && lockAt < this.now();
      };

      DateGroup.prototype.toJSON = function() {
        return {
          dueFor: this.get("title"),
          dueAt: this.dueAt(),
          unlockAt: this.unlockAt(),
          lockAt: this.lockAt(),
          available: this.available(),
          pending: this.pending(),
          open: this.open(),
          closed: this.closed()
        };
      };

      return DateGroup;

    })(Backbone.Model);
  });

}).call(this);
