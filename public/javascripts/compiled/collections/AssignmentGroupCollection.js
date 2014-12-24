(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'compiled/models/AssignmentGroup', 'underscore', 'i18n!assignments', 'compiled/collections/SubmissionCollection', 'compiled/collections/ModuleCollection'], function($, Backbone, AssignmentGroup, _, I18n, SubmissionCollection, ModuleCollection) {
    var AssignmentGroupCollection, PER_PAGE_LIMIT, _ref;

    PER_PAGE_LIMIT = 50;
    return AssignmentGroupCollection = (function(_super) {
      __extends(AssignmentGroupCollection, _super);

      function AssignmentGroupCollection() {
        _ref = AssignmentGroupCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroupCollection.prototype.model = AssignmentGroup;

      AssignmentGroupCollection.optionProperty('course');

      AssignmentGroupCollection.optionProperty('courseSubmissionsURL');

      AssignmentGroupCollection.prototype.defaults = {
        params: {
          include: ["assignments"]
        }
      };

      AssignmentGroupCollection.prototype.loadModuleNames = function() {
        var modules,
          _this = this;

        modules = new ModuleCollection([], {
          course_id: this.course.id
        });
        modules.loadAll = true;
        modules.fetch();
        return modules.on('fetched:last', function() {
          var assignment, assignmentModuleNames, m, moduleNames, _i, _j, _len, _len1, _ref1, _ref2, _results;

          moduleNames = {};
          _ref1 = modules.toJSON();
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            m = _ref1[_i];
            moduleNames[m.id] = m.name;
          }
          _ref2 = _this.assignments();
          _results = [];
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            assignment = _ref2[_j];
            assignmentModuleNames = _(assignment.get('module_ids')).map(function(id) {
              return moduleNames[id];
            });
            _results.push(assignment.set('modules', assignmentModuleNames));
          }
          return _results;
        });
      };

      AssignmentGroupCollection.prototype.assignments = function() {
        return this.chain().map(function(ag) {
          return ag.get('assignments').toArray();
        }).flatten().value();
      };

      AssignmentGroupCollection.prototype.comparator = 'position';

      AssignmentGroupCollection.prototype.userIsStudent = function() {
        return _.include(ENV.current_user_roles, "student");
      };

      AssignmentGroupCollection.prototype.getGrades = function() {
        var collection,
          _this = this;

        if (this.userIsStudent()) {
          collection = new SubmissionCollection;
          collection.url = function() {
            return "" + _this.courseSubmissionsURL + "?per_page=" + PER_PAGE_LIMIT;
          };
          collection.loadAll = true;
          collection.on('fetched:last', function() {
            return _this.loadGradesFromSubmissions(collection.toArray());
          });
          return collection.fetch();
        } else {
          return this.trigger('change:submissions');
        }
      };

      AssignmentGroupCollection.prototype.loadGradesFromSubmissions = function(submissions) {
        var assignment, grade, submission, submissionsHash, _i, _j, _len, _len1, _ref1;

        submissionsHash = {};
        for (_i = 0, _len = submissions.length; _i < _len; _i++) {
          submission = submissions[_i];
          submissionsHash[submission.get('assignment_id')] = submission;
        }
        _ref1 = this.assignments();
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          assignment = _ref1[_j];
          submission = submissionsHash[assignment.get('id')];
          if (submission) {
            if (submission.get('grade') != null) {
              grade = parseFloat(submission.get('grade'));
              if (!isNaN(grade)) {
                submission.set('grade', grade);
              }
            } else {
              submission.set('notYetGraded', true);
            }
            assignment.set('submission', submission);
          } else {
            assignment.set('submission', null);
            assignment.trigger('change:submission');
          }
        }
        return this.trigger('change:submissions');
      };

      return AssignmentGroupCollection;

    })(Backbone.Collection);
  });

}).call(this);
