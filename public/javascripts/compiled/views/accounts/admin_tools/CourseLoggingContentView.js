(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'compiled/views/PaginatedCollectionView', 'compiled/views/accounts/admin_tools/DateRangeSearchView', 'compiled/views/accounts/admin_tools/AutocompleteView', 'compiled/views/ValidatedMixin', 'compiled/views/accounts/admin_tools/CourseLoggingItemView', 'compiled/collections/CourseLoggingCollection', 'compiled/collections/CourseCollection', 'jst/accounts/admin_tools/courseLoggingContent', 'jst/accounts/admin_tools/courseLoggingResults', 'jst/accounts/admin_tools/courseLoggingDetails', 'jqueryui/dialog'], function(Backbone, $, PaginatedCollectionView, DateRangeSearchView, AutocompleteView, ValidatedMixin, CourseLoggingItemView, CourseLoggingCollection, CourseCollection, template, courseLoggingResultsTemplate, detailsTemplate) {
    var CourseLoggingContentView;

    return CourseLoggingContentView = (function(_super) {
      __extends(CourseLoggingContentView, _super);

      CourseLoggingContentView.mixin(ValidatedMixin);

      CourseLoggingContentView.child('resultsView', '#courseLoggingSearchResults');

      CourseLoggingContentView.child('dateRangeSearch', '#courseDateRangeSearch');

      CourseLoggingContentView.child('courseSearch', '#courseCourseSearch');

      CourseLoggingContentView.prototype.els = {
        '#courseLoggingForm': '$form'
      };

      CourseLoggingContentView.prototype.template = template;

      CourseLoggingContentView.prototype.detailsTemplate = detailsTemplate;

      function CourseLoggingContentView(options) {
        this.options = options;
        this.onFail = __bind(this.onFail, this);
        this.fetch = __bind(this.fetch, this);
        this.collection = new CourseLoggingCollection;
        CourseLoggingContentView.__super__.constructor.apply(this, arguments);
        this.dateRangeSearch = new DateRangeSearchView({
          name: "courseLogging"
        });
        this.courseSearch = new AutocompleteView({
          collection: new Backbone.Collection(null, {
            resourceName: 'courses'
          }),
          labelProperty: $.proxy(this.autoCompleteItemLabel, this),
          fieldName: 'course_id',
          placeholder: 'Course',
          sourceParameters: {
            "state[]": "all"
          }
        });
        this.resultsView = new PaginatedCollectionView({
          template: courseLoggingResultsTemplate,
          itemView: CourseLoggingItemView,
          collection: this.collection
        });
      }

      CourseLoggingContentView.prototype.events = {
        'submit #courseLoggingForm': 'onSubmit',
        'click #courseLoggingSearchResults .courseLoggingDetails > a': 'showDetails'
      };

      CourseLoggingContentView.prototype.onSubmit = function(event) {
        var json;

        event.preventDefault();
        json = this.$form.toJSON();
        if (this.validate(json)) {
          return this.updateCollection(json);
        }
      };

      CourseLoggingContentView.prototype.showDetails = function(event) {
        var $target, config, id, model, type;

        event.preventDefault();
        $target = $(event.target);
        id = $target.data("id");
        model = this.collection.get(id);
        if (model == null) {
          console.warn("Could not find model for event " + id + ".");
          return;
        }
        type = model.get("event_type");
        if (type == null) {
          console.warn("Could not find type for event " + id + ".");
          return;
        }
        this.dialog = $('<div class="use-css-transitions-for-show-hide" style="padding:0;"/>');
        this.dialog.html(this.detailsTemplate(model.present()));
        config = {
          title: "Event Details",
          width: 600,
          resizable: true
        };
        return this.dialog.dialog(config);
      };

      CourseLoggingContentView.prototype.updateCollection = function(json) {
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
        if (json.course_id) {
          params.id = json.course_id;
        }
        return this.collection.setParams(params);
      };

      CourseLoggingContentView.prototype.validate = function(json) {
        var errors;

        json || (json = this.$form.toJSON());
        delete json.course_submit;
        errors = this.dateRangeSearch.validate(json) || {};
        json.course_id || (json.course_id = this.$el.find("#course_id-autocompleteField").val());
        if (!json.course_id) {
          errors['course_submit'] = [
            {
              type: 'required',
              message: 'A valid Course is required to search events.'
            }
          ];
        }
        this.showErrors(errors);
        return $.isEmptyObject(errors);
      };

      CourseLoggingContentView.prototype.attach = function() {
        return this.collection.on('setParams', this.fetch);
      };

      CourseLoggingContentView.prototype.fetch = function() {
        return this.collection.fetch().fail(this.onFail);
      };

      CourseLoggingContentView.prototype.onFail = function(xhr) {
        var errors;

        this.collection.reset();
        this.resultsView.detachScroll();
        this.resultsView.$el.find(".paginatedLoadingIndicator").fadeOut();
        if (((xhr != null ? xhr.status : void 0) != null) && xhr.status === 404) {
          errors = {};
          errors['course_submit'] = [
            {
              type: 'required',
              message: 'A course with that ID could not be found for this account.'
            }
          ];
          if (!$.isEmptyObject(errors)) {
            return this.showErrors(errors);
          }
        }
      };

      CourseLoggingContentView.prototype.autoCompleteItemLabel = function(model) {
        var code, name;

        name = model.get("name");
        code = model.get("course_code");
        return "" + model.id + " - " + name + " - " + code;
      };

      return CourseLoggingContentView;

    })(Backbone.View);
  });

}).call(this);
