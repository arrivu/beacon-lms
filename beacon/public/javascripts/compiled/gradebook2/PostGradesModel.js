(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!modules', 'jquery', 'underscore', 'Backbone'], function(I18n, $, _, Backbone) {
    var PostGradesModel, _ref;

    return PostGradesModel = (function(_super) {
      __extends(PostGradesModel, _super);

      function PostGradesModel() {
        _ref = PostGradesModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PostGradesModel.prototype.initialize = function() {
        return this.ignored_assignment_ids = [];
      };

      PostGradesModel.prototype.defaults = function() {
        return {
          assignments: {},
          course_id: null,
          integration_course_id: null,
          integration_section_id: null
        };
      };

      PostGradesModel.prototype.assignment_list = function() {
        return _.values(this.get('assignments'));
      };

      PostGradesModel.prototype.assignments_to_post = function() {
        var assignments_to_ignore,
          _this = this;

        assignments_to_ignore = function(assignment) {
          return _.contains(_this.ignored_assignment_ids, assignment.id);
        };
        return _.reject(this.assignment_list(), assignments_to_ignore);
      };

      PostGradesModel.prototype.assignment_count = function() {
        return _.size(this.get('assignments'));
      };

      PostGradesModel.prototype.update_assignment = function(id, attrs) {
        var assignment;

        assignment = this.get('assignments')[id];
        assignment.modified = true;
        _.extend(assignment, attrs);
        return this.update_bound_attributes();
      };

      PostGradesModel.prototype.modified_assignments = function() {
        return _.filter(this.get('assignments'), function(assignment) {
          return assignment.modified != null;
        });
      };

      PostGradesModel.prototype.assignments_with_errors_count = function() {
        return this.missing_and_not_unique().length - this.ignored_assignment_ids.length;
      };

      PostGradesModel.prototype.update_bound_attributes = function() {
        this.set({
          assignments_to_post: this.assignments_to_post()
        });
        return this.set({
          assignments_with_errors_count: this.assignments_with_errors_count()
        });
      };

      PostGradesModel.prototype.ignore_assignment = function(id) {
        this.ignored_assignment_ids.push(id);
        return this.update_bound_attributes();
      };

      PostGradesModel.prototype.ignore_all = function() {
        this.ignored_assignment_ids = _.map(this.missing_and_not_unique(), function(assignment) {
          return assignment.id;
        });
        return this.update_bound_attributes();
      };

      PostGradesModel.prototype.reset_ignored_assignments = function() {
        this.ignored_assignment_ids = [];
        return this.update_bound_attributes();
      };

      PostGradesModel.prototype.course_id = function() {
        return this.get('course_id');
      };

      PostGradesModel.prototype.integration_course_id = function() {
        return this.get('integration_course_id');
      };

      PostGradesModel.prototype.integration_section_id = function() {
        return this.get('integration_section_id');
      };

      PostGradesModel.prototype.not_unique_assignments = function() {
        var add_not_unique_flag, duplicates;

        duplicates = function(assignment) {
          return assignment.length > 1;
        };
        add_not_unique_flag = function(assignment) {
          return _.extend({}, assignment, {
            'not_unique': true
          });
        };
        return _.chain(this.assignment_list()).groupBy("name").filter(duplicates).flatten().map(add_not_unique_flag).value();
      };

      PostGradesModel.prototype.missing_due_date = function() {
        var missing_dates;

        return missing_dates = _.chain(this.assignment_list()).filter(function(assignment) {
          return !assignment.due_at;
        }).flatten().value();
      };

      PostGradesModel.prototype.missing_and_not_unique = function() {
        var find_assignment_by_id, get_id, missing_and_not_unique_ids, missing_ids, not_unique_ids,
          _this = this;

        get_id = function(assignment) {
          return assignment.id;
        };
        missing_ids = _.map(this.missing_due_date(), get_id);
        not_unique_ids = _.map(this.not_unique_assignments, get_id);
        missing_and_not_unique_ids = _.union(missing_ids, not_unique_ids);
        find_assignment_by_id = function(id) {
          return _.find(_this.assignment_list(), function(assignment) {
            return id === assignment.id;
          });
        };
        return _.map(missing_and_not_unique_ids, find_assignment_by_id);
      };

      PostGradesModel.prototype.ungraded_submissions = function() {
        return _.filter(this.assignment_list(), function(assignment) {
          return assignment.needs_grading_count > 0;
        });
      };

      return PostGradesModel;

    })(Backbone.Model);
  });

}).call(this);
