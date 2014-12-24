(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/models/Assignment', 'compiled/models/DateGroup', 'compiled/collections/AssignmentOverrideCollection', 'compiled/collections/DateGroupCollection', 'str/pluralize', 'i18n!quizzes', 'jquery.ajaxJSON', 'jquery.instructure_misc_helpers'], function($, _, Backbone, Assignment, DateGroup, AssignmentOverrideCollection, DateGroupCollection, pluralize, I18n) {
    var Quiz, _ref;

    return Quiz = (function(_super) {
      __extends(Quiz, _super);

      function Quiz() {
        this.toView = __bind(this.toView, this);
        this.singleSectionDueDate = __bind(this.singleSectionDueDate, this);
        this.allDates = __bind(this.allDates, this);
        this.multipleDueDates = __bind(this.multipleDueDates, this);
        this.defaultDates = __bind(this.defaultDates, this);
        this.htmlUrl = __bind(this.htmlUrl, this);
        this.lockAt = __bind(this.lockAt, this);
        this.unlockAt = __bind(this.unlockAt, this);
        this.dueAt = __bind(this.dueAt, this);
        this.unpublish = __bind(this.unpublish, this);
        this.publish = __bind(this.publish, this);        _ref = Quiz.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Quiz.prototype.resourceName = 'quizzes';

      Quiz.prototype.defaults = {
        due_at: null,
        unlock_at: null,
        lock_at: null,
        unpublishable: true,
        points_possible: null
      };

      Quiz.prototype.initialize = function(attributes, options) {
        if (options == null) {
          options = {};
        }
        Quiz.__super__.initialize.apply(this, arguments);
        this.initAssignment();
        this.initAssignmentOverrides();
        this.initUrls();
        this.initTitleLabel();
        this.initUnpublishable();
        this.initQuestionsCount();
        this.initPointsCount();
        return this.initAllDates();
      };

      Quiz.prototype.initAssignment = function() {
        if (this.attributes.assignment) {
          return this.set('assignment', new Assignment(this.attributes.assignment));
        }
      };

      Quiz.prototype.initAssignmentOverrides = function() {
        var overrides;

        if (this.attributes.assignment_overrides) {
          overrides = new AssignmentOverrideCollection(this.attributes.assignment_overrides);
          return this.set('assignment_overrides', overrides, {
            silent: true
          });
        }
      };

      Quiz.prototype.initUrls = function() {
        if (this.get('html_url')) {
          this.set('base_url', this.get('html_url').replace(/quizzes\/\d+/, "quizzes"));
          this.set('url', "" + (this.get('base_url')) + "/" + (this.get('id')));
          this.set('edit_url', "" + (this.get('base_url')) + "/" + (this.get('id')) + "/edit");
          this.set('publish_url', "" + (this.get('base_url')) + "/publish");
          return this.set('unpublish_url', "" + (this.get('base_url')) + "/unpublish");
        }
      };

      Quiz.prototype.initTitleLabel = function() {
        return this.set('title_label', this.get('title') || this.get('readable_type'));
      };

      Quiz.prototype.initUnpublishable = function() {
        if (this.get('can_unpublish') === false && this.get('published')) {
          return this.set('unpublishable', false);
        }
      };

      Quiz.prototype.initQuestionsCount = function() {
        var cnt;

        cnt = this.get('question_count');
        return this.set('question_count_label', I18n.t('question_count', 'Question', {
          count: cnt
        }));
      };

      Quiz.prototype.initPointsCount = function() {
        var pts, text;

        pts = this.get('points_possible');
        text = '';
        if (pts && pts > 0) {
          text = I18n.t('assignment_points_possible', 'pt', {
            count: pts
          });
        }
        return this.set('possible_points_label', text);
      };

      Quiz.prototype.initAllDates = function() {
        var allDates;

        if ((allDates = this.get('all_dates')) != null) {
          return this.set('all_dates', new DateGroupCollection(allDates));
        }
      };

      Quiz.prototype.publish = function() {
        this.set('published', true);
        return $.ajaxJSON(this.get('publish_url'), 'POST', {
          'quizzes': [this.get('id')]
        });
      };

      Quiz.prototype.unpublish = function() {
        this.set('published', false);
        return $.ajaxJSON(this.get('unpublish_url'), 'POST', {
          'quizzes': [this.get('id')]
        });
      };

      Quiz.prototype.disabledMessage = function() {
        return I18n.t('cant_unpublish_when_students_submit', "Can't unpublish if there are student submissions");
      };

      Quiz.prototype.dueAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('due_at');
        }
        return this.set('due_at', date);
      };

      Quiz.prototype.unlockAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('unlock_at');
        }
        return this.set('unlock_at', date);
      };

      Quiz.prototype.lockAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('lock_at');
        }
        return this.set('lock_at', date);
      };

      Quiz.prototype.htmlUrl = function() {
        return this.get('url');
      };

      Quiz.prototype.defaultDates = function() {
        var group;

        return group = new DateGroup({
          due_at: this.get("due_at"),
          unlock_at: this.get("unlock_at"),
          lock_at: this.get("lock_at")
        });
      };

      Quiz.prototype.multipleDueDates = function() {
        var dateGroups;

        dateGroups = this.get("all_dates");
        return dateGroups && dateGroups.length > 1;
      };

      Quiz.prototype.allDates = function() {
        var groups, models, result;

        groups = this.get("all_dates");
        models = (groups && groups.models) || [];
        return result = _.map(models, function(group) {
          return group.toJSON();
        });
      };

      Quiz.prototype.singleSectionDueDate = function() {
        var _ref1;

        return ((_ref1 = _.find(this.allDates(), 'dueAt')) != null ? _ref1.dueAt.toISOString() : void 0) || this.dueAt();
      };

      Quiz.prototype.isOnlyVisibleToOverrides = function(overrideFlag) {
        if (!(arguments.length > 0)) {
          return this.get('only_visible_to_overrides') || false;
        }
        return this.set('only_visible_to_overrides', overrideFlag);
      };

      Quiz.prototype.toView = function() {
        var field, fields, hash, _i, _len;

        fields = ['htmlUrl', 'multipleDueDates', 'allDates', 'dueAt', 'lockAt', 'unlockAt', 'singleSectionDueDate'];
        hash = {
          id: this.get('id')
        };
        for (_i = 0, _len = fields.length; _i < _len; _i++) {
          field = fields[_i];
          hash[field] = this[field]();
        }
        return hash;
      };

      return Quiz;

    })(Backbone.Model);
  });

}).call(this);
