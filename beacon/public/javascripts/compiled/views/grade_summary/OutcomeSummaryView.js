(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/views/CollectionView', 'compiled/views/grade_summary/SectionView', 'compiled/views/grade_summary/OutcomeDetailView'], function($, _, Backbone, CollectionView, SectionView, OutcomeDetailView) {
    var OutcomeSummaryView, _ref;

    return OutcomeSummaryView = (function(_super) {
      __extends(OutcomeSummaryView, _super);

      function OutcomeSummaryView() {
        _ref = OutcomeSummaryView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeSummaryView.optionProperty('course_id');

      OutcomeSummaryView.optionProperty('user_id');

      OutcomeSummaryView.optionProperty('toggles');

      OutcomeSummaryView.prototype.itemView = SectionView;

      OutcomeSummaryView.prototype.initialize = function() {
        OutcomeSummaryView.__super__.initialize.apply(this, arguments);
        this.outcomeDetailView = new OutcomeDetailView({
          user_id: this.user_id,
          course_id: this.course_id
        });
        return this.bindToggles();
      };

      OutcomeSummaryView.prototype.show = function(path) {
        var outcome, outcome_id;

        this.fetch();
        if (path) {
          outcome_id = parseInt(path);
          outcome = this.collection.outcomeCache.get(outcome_id);
          if (outcome) {
            return this.outcomeDetailView.show(outcome);
          }
        } else {
          return this.outcomeDetailView.close();
        }
      };

      OutcomeSummaryView.prototype.fetch = function() {
        this.fetch = $.noop;
        return this.collection.fetch();
      };

      OutcomeSummaryView.prototype.bindToggles = function() {
        var $collapseToggle, $expandToggle,
          _this = this;

        $collapseToggle = $('div.outcome-toggles a.icon-collapse');
        $expandToggle = $('div.outcome-toggles a.icon-expand');
        this.toggles.find('.icon-expand').click(function() {
          _this.$('li.group').addClass('expanded');
          _this.$('div.group-description').attr('aria-expanded', "true");
          $expandToggle.attr('disabled', 'disabled');
          $expandToggle.attr('aria-disabled', 'true');
          $collapseToggle.removeAttr('disabled');
          $collapseToggle.attr('aria-disabled', 'false');
          return $("div.groups").focus();
        });
        return this.toggles.find('.icon-collapse').click(function() {
          _this.$('li.group').removeClass('expanded');
          _this.$('div.group-description').attr('aria-expanded', "false");
          $collapseToggle.attr('disabled', 'disabled');
          $collapseToggle.attr('aria-disabled', 'true');
          $expandToggle.removeAttr('disabled');
          return $expandToggle.attr('aria-disabled', 'false');
        });
      };

      return OutcomeSummaryView;

    })(CollectionView);
  });

}).call(this);
