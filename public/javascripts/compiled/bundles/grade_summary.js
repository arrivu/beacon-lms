(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['jquery', 'underscore', 'Backbone', 'compiled/userSettings', 'compiled/collections/OutcomeSummaryCollection', 'compiled/views/grade_summary/OutcomeSummaryView', 'jqueryui/tabs', 'jquery.disableWhileLoading', 'grade_summary'], function($, _, Backbone, userSettings, OutcomeSummaryCollection, OutcomeSummaryView) {
    var GradebookSummaryRouter, _ref;

    GradebookSummaryRouter = (function(_super) {
      __extends(GradebookSummaryRouter, _super);

      function GradebookSummaryRouter() {
        this.activate = __bind(this.activate, this);        _ref = GradebookSummaryRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GradebookSummaryRouter.prototype.routes = {
        '': 'tab',
        'tab-:route(/*path)': 'tab'
      };

      GradebookSummaryRouter.prototype.initialize = function() {
        var course_id, user_id;

        if (!ENV.student_outcome_gradebook_enabled) {
          return;
        }
        $('#content').tabs({
          activate: this.activate
        });
        course_id = ENV.context_asset_string.replace('course_', '');
        user_id = ENV.student_id;
        this.outcomes = new OutcomeSummaryCollection([], {
          course_id: course_id,
          user_id: user_id
        });
        return this.outcomeView = new OutcomeSummaryView({
          el: $('#outcomes'),
          collection: this.outcomes,
          user_id: user_id,
          course_id: course_id,
          toggles: $('.outcome-toggles')
        });
      };

      GradebookSummaryRouter.prototype.tab = function(tab, path) {
        if (tab !== 'outcomes' && tab !== 'assignments') {
          tab = userSettings.contextGet('grade_summary_tab') || 'assignments';
        }
        $("a[href='#" + tab + "']").click();
        if (tab === 'outcomes') {
          this.outcomeView.show(path);
          return $('.outcome-toggles').show();
        } else {
          return $('.outcome-toggles').hide();
        }
      };

      GradebookSummaryRouter.prototype.activate = function(event, ui) {
        var tab;

        tab = ui.newPanel.attr('id');
        router.navigate("#tab-" + tab, {
          trigger: true
        });
        return userSettings.contextSet('grade_summary_tab', tab);
      };

      return GradebookSummaryRouter;

    })(Backbone.Router);
    this.router = new GradebookSummaryRouter;
    return Backbone.history.start();
  });

}).call(this);
