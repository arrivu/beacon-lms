(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'jquery', 'underscore', 'Backbone', 'compiled/class/cache', 'compiled/models/AssignmentGroup', 'jst/assignments/ToggleShowBy'], function(I18n, $, _, Backbone, Cache, AssignmentGroup, template) {
    var ToggleShowByView, _ref;

    return ToggleShowByView = (function(_super) {
      __extends(ToggleShowByView, _super);

      function ToggleShowByView() {
        this.toggleShowBy = __bind(this.toggleShowBy, this);
        this.setAssignmentGroups = __bind(this.setAssignmentGroups, this);
        this.initializeDateGroups = __bind(this.initializeDateGroups, this);
        this.initializeCache = __bind(this.initializeCache, this);        _ref = ToggleShowByView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ToggleShowByView.optionProperty('course');

      ToggleShowByView.optionProperty('assignmentGroups');

      ToggleShowByView.prototype.template = template;

      ToggleShowByView.prototype.els = {
        '#show_by': '$showBy',
        '#show_by_date': '$showByDate'
      };

      ToggleShowByView.prototype.events = {
        'click input': 'toggleShowBy'
      };

      ToggleShowByView.prototype.initialize = function() {
        ToggleShowByView.__super__.initialize.apply(this, arguments);
        this.initialized = false;
        this.initializeCache();
        this.course.on('change', this.initializeCache);
        this.course.on('change', this.render);
        this.assignmentGroups.once('change:submissions', this.initializeDateGroups);
        this.on('changed:showBy', this.setAssignmentGroups);
        return this.on('changed:showBy', this.render);
      };

      ToggleShowByView.prototype.initializeCache = function() {
        if (this.course.get('id') == null) {
          return;
        }
        $.extend(true, this, Cache);
        if (ENV.current_user_id != null) {
          this.cache.use('localStorage');
        }
        if (this.cache.get(this.cacheKey()) == null) {
          this.cache.set(this.cacheKey(), true);
        }
        return this.initialized = true;
      };

      ToggleShowByView.prototype.initializeDateGroups = function() {
        var assignments, dated, overdue, overdue_group, past, past_group, sorted_groups, undated, undated_group, upcoming, upcoming_group;

        assignments = _.flatten(this.assignmentGroups.map(function(ag) {
          return ag.get('assignments').models;
        }));
        dated = _.select(assignments, function(a) {
          return a.dueAt() != null;
        });
        undated = _.difference(assignments, dated);
        past = [];
        overdue = [];
        upcoming = [];
        _.each(dated, function(a) {
          if (new Date() > Date.parse(a.dueAt())) {
            if (a.expectsSubmission() && a.allowedToSubmit() && a.withoutGradedSubmission()) {
              return overdue.push(a);
            } else {
              return past.push(a);
            }
          } else {
            return upcoming.push(a);
          }
        });
        overdue_group = new AssignmentGroup({
          id: 'overdue',
          name: 'Overdue Assignments',
          assignments: overdue
        });
        upcoming_group = new AssignmentGroup({
          id: 'upcoming',
          name: 'Upcoming Assignments',
          assignments: upcoming
        });
        undated_group = new AssignmentGroup({
          id: 'undated',
          name: 'Undated Assignments',
          assignments: undated
        });
        past_group = new AssignmentGroup({
          id: 'past',
          name: 'Past Assignments',
          assignments: past
        });
        sorted_groups = this._sortGroups(overdue_group, upcoming_group, undated_group, past_group);
        this.groupedByAG = this.assignmentGroups.models;
        this.groupedByDate = sorted_groups;
        return this.setAssignmentGroups();
      };

      ToggleShowByView.prototype._sortGroups = function(overdue, upcoming, undated, past) {
        this._sortAscending(overdue.get('assignments'));
        this._sortAscending(upcoming.get('assignments'));
        this._sortDescending(past.get('assignments'));
        return [overdue, upcoming, undated, past];
      };

      ToggleShowByView.prototype._sortAscending = function(assignments) {
        assignments.comparator = function(a) {
          return Date.parse(a.dueAt());
        };
        return assignments.sort();
      };

      ToggleShowByView.prototype._sortDescending = function(assignments) {
        assignments.comparator = function(a) {
          return new Date() - Date.parse(a.dueAt());
        };
        return assignments.sort();
      };

      ToggleShowByView.prototype.toJSON = function() {
        return {
          visible: this.initialized,
          showByDate: this.showByDate()
        };
      };

      ToggleShowByView.prototype.afterRender = function() {
        var _ref1;

        return (_ref1 = this.$showBy) != null ? _ref1.buttonset() : void 0;
      };

      ToggleShowByView.prototype.setAssignmentGroups = function() {
        var groups,
          _this = this;

        groups = this.showByDate() ? this.groupedByDate : this.groupedByAG;
        this.setAssignmentGroupAssociations(groups);
        groups = _.select(groups, function(group) {
          var hasWeight;

          hasWeight = _this.course.get('apply_assignment_group_weights') && (group.get('group_weight') != null) && group.get('group_weight') > 0;
          return group.get('assignments').length > 0 || hasWeight;
        });
        return this.assignmentGroups.reset(groups);
      };

      ToggleShowByView.prototype.setAssignmentGroupAssociations = function(groups) {
        var assignment, assignment_group, _i, _len, _results;

        _results = [];
        for (_i = 0, _len = groups.length; _i < _len; _i++) {
          assignment_group = groups[_i];
          if (assignment_group.get("assignments").models.length) {
            _results.push((function() {
              var _j, _len1, _ref1, _results1;

              _ref1 = assignment_group.get("assignments").models;
              _results1 = [];
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                assignment = _ref1[_j];
                assignment.collection = assignment_group;
                _results1.push(assignment.set('assignment_group_id', assignment_group.id));
              }
              return _results1;
            })());
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      ToggleShowByView.prototype.showByDate = function() {
        if (!this.initialized) {
          return true;
        }
        return this.cache.get(this.cacheKey());
      };

      ToggleShowByView.prototype.cacheKey = function() {
        return ["course", this.course.get('id'), "user", ENV.current_user_id, "assignments_show_by_date"];
      };

      ToggleShowByView.prototype.toggleShowBy = function(ev) {
        var currentlyByDate, key, showByDate;

        ev.preventDefault();
        key = this.cacheKey();
        showByDate = this.$showByDate.is(':checked');
        currentlyByDate = this.cache.get(key);
        if (currentlyByDate !== showByDate) {
          this.cache.set(key, showByDate);
          this.trigger('changed:showBy');
        }
        return this.assignmentGroups.trigger('cancelSearch');
      };

      return ToggleShowByView;

    })(Backbone.View);
  });

}).call(this);
