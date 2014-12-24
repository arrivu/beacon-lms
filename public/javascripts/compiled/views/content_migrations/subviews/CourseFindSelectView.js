(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'underscore', 'jst/content_migrations/subviews/CourseFindSelect', 'jst/courses/autocomplete_item', 'jquery.ajaxJSON', 'jquery.disableWhileLoading'], function($, Backbone, _, template, autocompleteItemTemplate) {
    var CourseFindSelectView, _ref;

    return CourseFindSelectView = (function(_super) {
      __extends(CourseFindSelectView, _super);

      function CourseFindSelectView() {
        this.updateSearch = __bind(this.updateSearch, this);
        this.updateSelect = __bind(this.updateSelect, this);        _ref = CourseFindSelectView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseFindSelectView.optionProperty('current_user_id');

      CourseFindSelectView.prototype.template = template;

      CourseFindSelectView.prototype.els = {
        '#courseSearchField': '$courseSearchField',
        '#courseSelect': '$courseSelect'
      };

      CourseFindSelectView.prototype.events = {
        'change #courseSelect': 'updateSearch',
        'change #include_completed_courses': 'toggleConcludedCourses'
      };

      CourseFindSelectView.prototype.render = function() {
        var dfd,
          _this = this;

        CourseFindSelectView.__super__.render.apply(this, arguments);
        dfd = this.getManageableCourses();
        this.$el.disableWhileLoading(dfd);
        return dfd.done(function(data) {
          _this.courses = data;
          _this.coursesByTerms = _.groupBy(data, function(course) {
            return course.term;
          });
          return CourseFindSelectView.__super__.render.apply(_this, arguments);
        });
      };

      CourseFindSelectView.prototype.afterRender = function() {
        var $converterDiv;

        this.$courseSearchField.autocomplete({
          source: this.manageableCourseUrl(),
          select: this.updateSelect
        });
        this.$courseSearchField.data('ui-autocomplete')._renderItem = function(ul, item) {
          return $(autocompleteItemTemplate(item)).appendTo(ul);
        };
        $converterDiv = $('#converter');
        this.$courseSearchField.on('focus', function() {
          return $converterDiv.attr('aria-atomic', false);
        });
        this.$courseSearchField.on('blur', function() {
          return $converterDiv.attr('aria-atomic', true);
        });
        this.$courseSelect.on('focus', function() {
          return $converterDiv.attr('aria-atomic', false);
        });
        return this.$courseSelect.on('blur', function() {
          return $converterDiv.attr('aria-atomic', true);
        });
      };

      CourseFindSelectView.prototype.toJSON = function() {
        var json;

        json = CourseFindSelectView.__super__.toJSON.apply(this, arguments);
        json.terms = this.coursesByTerms;
        json.include_concluded = this.includeConcludedCourses;
        return json;
      };

      CourseFindSelectView.prototype.getManageableCourses = function() {
        var dfd;

        dfd = $.ajaxJSON(this.manageableCourseUrl(), 'GET', {}, {}, {}, {});
        this.$el.disableWhileLoading(dfd);
        return dfd;
      };

      CourseFindSelectView.prototype.toggleConcludedCourses = function() {
        this.includeConcludedCourses = this.includeConcludedCourses ? false : true;
        this.$courseSearchField.autocomplete('option', 'source', this.manageableCourseUrl());
        return this.render();
      };

      CourseFindSelectView.prototype.manageableCourseUrl = function() {
        var params;

        if (this.includeConcludedCourses) {
          params = $.param({
            "include[]": 'concluded'
          });
        }
        if (params) {
          return "/users/" + this.current_user_id + "/manageable_courses?" + params;
        } else {
          return "/users/" + this.current_user_id + "/manageable_courses";
        }
      };

      CourseFindSelectView.prototype.autocompleteCourses = function() {
        return _.map(this.courses, function(course) {
          return {
            label: course.label,
            id: course.id,
            value: course.label
          };
        });
      };

      CourseFindSelectView.prototype.updateSelect = function(event, ui) {
        this.setSourceCourseId(ui.item.id);
        return this.$courseSelect.val(ui.item.id);
      };

      CourseFindSelectView.prototype.updateSearch = function(event) {
        var courseObj, courses, value,
          _this = this;

        value = event.target.value && String(event.target.value);
        this.setSourceCourseId(value);
        courses = this.autocompleteCourses();
        courseObj = _.find(courses, function(course) {
          return course.id === value;
        });
        return this.$courseSearchField.val(courseObj != null ? courseObj.value : void 0);
      };

      CourseFindSelectView.prototype.setSourceCourseId = function(id) {
        var course;

        this.model.set('settings', {
          source_course_id: id
        });
        if (course = _.find(this.courses, function(c) {
          return c.id === id;
        })) {
          return this.trigger('course_changed', course);
        }
      };

      CourseFindSelectView.prototype.validations = function() {
        var errors, settings;

        errors = {};
        settings = this.model.get('settings');
        if (!(settings != null ? settings.source_course_id : void 0)) {
          errors.courseSearchField = [
            {
              type: "required",
              message: "You must select a course to copy content from"
            }
          ];
        }
        return errors;
      };

      return CourseFindSelectView;

    })(Backbone.View);
  });

}).call(this);
