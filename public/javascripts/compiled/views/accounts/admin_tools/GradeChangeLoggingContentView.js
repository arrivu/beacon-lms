(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'compiled/views/PaginatedCollectionView', 'compiled/views/accounts/admin_tools/DateRangeSearchView', 'compiled/views/accounts/admin_tools/AutocompleteView', 'compiled/views/ValidatedMixin', 'compiled/views/accounts/admin_tools/GradeChangeLoggingItemView', 'compiled/collections/GradeChangeLoggingCollection', 'compiled/collections/CourseCollection', 'jst/accounts/admin_tools/gradeChangeLoggingContent', 'jst/accounts/admin_tools/gradeChangeLoggingResults'], function(Backbone, $, PaginatedCollectionView, DateRangeSearchView, AutocompleteView, ValidatedMixin, GradeChangeLoggingItemView, GradeChangeLoggingCollection, CourseCollection, template, gradeChangeLoggingResultsTemplate) {
    var GradeChangeLoggingContentView;

    return GradeChangeLoggingContentView = (function(_super) {
      __extends(GradeChangeLoggingContentView, _super);

      GradeChangeLoggingContentView.mixin(ValidatedMixin);

      GradeChangeLoggingContentView.child('resultsView', '#gradeChangeLoggingSearchResults');

      GradeChangeLoggingContentView.child('dateRangeSearch', '#gradeChangeDateRangeSearch');

      GradeChangeLoggingContentView.child('graderSearch', '#gradeChangeGraderSearch');

      GradeChangeLoggingContentView.child('studentSearch', '#gradeChangeStudentSearch');

      GradeChangeLoggingContentView.prototype.els = {
        '#gradeChangeLoggingSearch': '$gradeChangeLogginSearch',
        '#gradeChangeLoggingForm': '$form'
      };

      GradeChangeLoggingContentView.prototype.template = template;

      function GradeChangeLoggingContentView(options) {
        this.options = options;
        this.onFail = __bind(this.onFail, this);
        this.fetch = __bind(this.fetch, this);
        this.collection = new GradeChangeLoggingCollection;
        GradeChangeLoggingContentView.__super__.constructor.apply(this, arguments);
        this.dateRangeSearch = new DateRangeSearchView({
          name: "gradeChangeLogging"
        });
        this.graderSearch = new AutocompleteView({
          collection: this.options.users,
          fieldName: 'grader_id',
          placeholder: 'Grader'
        });
        this.studentSearch = new AutocompleteView({
          collection: this.options.users,
          fieldName: 'student_id',
          placeholder: 'Student'
        });
        this.resultsView = new PaginatedCollectionView({
          template: gradeChangeLoggingResultsTemplate,
          itemView: GradeChangeLoggingItemView,
          collection: this.collection
        });
      }

      GradeChangeLoggingContentView.prototype.events = {
        'submit #gradeChangeLoggingForm': 'onSubmit'
      };

      GradeChangeLoggingContentView.prototype.onSubmit = function(event) {
        var json;

        event.preventDefault();
        json = this.$form.toJSON();
        if (this.validate(json)) {
          return this.updateCollection(json);
        }
      };

      GradeChangeLoggingContentView.prototype.updateCollection = function(json) {
        var params;

        json || (json = this.$form.toJSON());
        params = {
          id: null,
          type: null,
          start_time: '',
          end_time: ''
        };
        if (json.start_time) {
          params.start_time = json.start_time;
        }
        if (json.end_time) {
          params.end_time = json.end_time;
        }
        if (json.grader_id) {
          params.type = 'graders';
          params.id = json.grader_id;
        }
        if (json.student_id) {
          params.type = 'students';
          params.id = json.student_id;
        }
        if (json.course_id) {
          params.type = 'courses';
          params.id = json.course_id;
        }
        if (json.assignment_id) {
          params.type = 'assignments';
          params.id = json.assignment_id;
        }
        return this.collection.setParams(params);
      };

      GradeChangeLoggingContentView.prototype.validate = function(json) {
        var errors;

        json || (json = this.$form.toJSON());
        delete json.gradeChange_submit;
        errors = this.dateRangeSearch.validate(json) || {};
        if (!json.course_id && !json.student_id && !json.grader_id && !json.assignment_id) {
          errors['gradeChange_submit'] = [
            {
              type: 'required',
              message: 'A valid Grader, Student, Course Id, or Assignment Id is required to search events.'
            }
          ];
        }
        this.showErrors(errors);
        return $.isEmptyObject(errors);
      };

      GradeChangeLoggingContentView.prototype.attach = function() {
        return this.collection.on('setParams', this.fetch);
      };

      GradeChangeLoggingContentView.prototype.fetch = function() {
        return this.collection.fetch().fail(this.onFail);
      };

      GradeChangeLoggingContentView.prototype.onFail = function(xhr) {
        var errors, type;

        this.collection.reset();
        this.resultsView.detachScroll();
        this.resultsView.$el.find(".paginatedLoadingIndicator").fadeOut();
        if (((xhr != null ? xhr.status : void 0) != null) && xhr.status === 404) {
          type = this.collection.options.params.type;
          errors = {};
          if (type === 'courses') {
            errors['course_id'] = [
              {
                type: 'required',
                message: 'A course with that ID could not be found for this account.'
              }
            ];
          }
          if (type === 'assignments') {
            errors['assignment_id'] = [
              {
                type: 'required',
                message: 'An assignment with that ID could not be found for this account.'
              }
            ];
          }
          if (!$.isEmptyObject(errors)) {
            return this.showErrors(errors);
          }
        }
      };

      return GradeChangeLoggingContentView;

    })(Backbone.View);
  });

}).call(this);
