(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/outcomes/OutcomesDirectoryView', 'compiled/collections/OutcomeCollection'], function(OutcomesDirectoryView, OutcomeCollection) {
    var StateStandardsDirectoryView, _ref;

    return StateStandardsDirectoryView = (function(_super) {
      __extends(StateStandardsDirectoryView, _super);

      function StateStandardsDirectoryView() {
        _ref = StateStandardsDirectoryView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      StateStandardsDirectoryView.prototype.initialize = function(opts) {
        this.outcomes = new OutcomeCollection;
        return StateStandardsDirectoryView.__super__.initialize.apply(this, arguments);
      };

      StateStandardsDirectoryView.prototype.fetchOutcomes = function() {};

      return StateStandardsDirectoryView;

    })(OutcomesDirectoryView);
  });

}).call(this);
