(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'jquery', 'underscore', 'Backbone', 'compiled/views/conversations/SearchableSubmenuView', 'jst/conversations/courseOptions', 'jquery.instructure_date_and_time', 'vendor/bootstrap/bootstrap-dropdown', 'vendor/bootstrap-select/bootstrap-select'], function(I18n, $, _, _arg, SearchableSubmenuView, template) {
    var Collection, CourseSelectionView, View, _ref;

    View = _arg.View, Collection = _arg.Collection;
    return CourseSelectionView = (function(_super) {
      __extends(CourseSelectionView, _super);

      function CourseSelectionView() {
        this.truncate_course = __bind(this.truncate_course, this);
        this.loadAll = __bind(this.loadAll, this);
        this.render = __bind(this.render, this);        _ref = CourseSelectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseSelectionView.prototype.events = {
        'change': 'onChange'
      };

      CourseSelectionView.prototype.initialize = function() {
        CourseSelectionView.__super__.initialize.apply(this, arguments);
        if (!this.options.defaultOption) {
          this.options.defaultOption = I18n.t('all_courses', 'All Courses');
        }
        this.$el.addClass('show-tick');
        this.$el.selectpicker({
          useSubmenus: true
        }).next().on('mouseover', this.loadAll).find('.dropdown-toggle').on('focus', this.loadAll);
        this.options.courses.favorites.on('reset', this.render);
        this.options.courses.all.on('reset', this.render);
        this.options.courses.all.on('add', this.render);
        this.options.courses.groups.on('reset', this.render);
        this.options.courses.groups.on('add', this.render);
        this.$picker = this.$el.next();
        return this.render();
      };

      CourseSelectionView.prototype.render = function() {
        var concluded, data, more, now,
          _this = this;

        CourseSelectionView.__super__.render.call(this);
        more = [];
        concluded = [];
        now = $.fudgeDateForProfileTimezone(new Date);
        this.options.courses.all.each(function(course) {
          var collection, is_complete;

          if (_this.options.courses.favorites.get(course.id)) {
            return;
          }
          is_complete = course.get('workflow_state') === 'completed' || (course.get('end_at') && new Date(course.get('end_at')) < now) || (course.get('term').end_at && new Date(course.get('term').end_at) < now);
          collection = is_complete ? concluded : more;
          return collection.push(course.toJSON());
        });
        data = {
          defaultOption: this.options.defaultOption,
          favorites: this.options.courses.favorites.toJSON(),
          more: more,
          concluded: concluded,
          groups: this.options.courses.groups.toJSON()
        };
        this.truncate_course_name_data(data);
        this.$el.html(template(data));
        this.$el.selectpicker('refresh');
        this.$picker.find('.paginatedLoadingIndicator').remove();
        this.createSearchViews();
        if (!this.renderValue()) {
          return this.loadAll();
        }
      };

      CourseSelectionView.prototype.createSearchViews = function() {
        var searchViews;

        searchViews = [];
        this.$picker.find('.dropdown-submenu').each(function() {
          return searchViews.push(new SearchableSubmenuView({
            el: this
          }));
        });
        return this.searchViews = searchViews;
      };

      CourseSelectionView.prototype.loadAll = function() {
        var all;

        all = this.options.courses.all;
        if (all._loading) {
          return;
        }
        all.fetch();
        all._loading = true;
        this.options.courses.groups.fetch();
        return this.$picker.find('> .dropdown-menu').append($('<div />').attr('class', 'paginatedLoadingIndicator').css('clear', 'both'));
      };

      CourseSelectionView.prototype._value = '';

      CourseSelectionView.prototype.setValue = function(value) {
        this._value = value || '';
        this.renderValue();
        return this.triggerEvent();
      };

      CourseSelectionView.prototype.renderValue = function() {
        this.silenced = true;
        this.$el.selectpicker('val', this._value);
        this.silenced = false;
        return this.$el.val() === this._value;
      };

      CourseSelectionView.prototype.onChange = function() {
        if (this.silenced) {
          return;
        }
        this._value = this.$el.val();
        this.triggerEvent();
        return this.searchViews.forEach(function(view) {
          return view.clearSearch();
        });
      };

      CourseSelectionView.prototype.getCurrentContext = function() {
        var context, course, id, match, matches, type;

        matches = this._value.match(/(\w+)_(\d+)/);
        if (!matches) {
          return {};
        }
        match = matches[0], type = matches[1], id = matches[2];
        context = type === 'course' ? course = this.options.courses.favorites.get(id) || this.options.courses.all.get(id) : this.options.courses.groups.get(id);
        if (context) {
          return {
            name: context.get('name'),
            id: this._value
          };
        } else {
          return {};
        }
      };

      CourseSelectionView.prototype.triggerEvent = function() {
        return this.trigger('course', this.getCurrentContext());
      };

      CourseSelectionView.prototype.focus = function() {
        return this.$el.next().find('.dropdown-toggle').focus();
      };

      CourseSelectionView.prototype.truncate_course_name_data = function(course_data) {
        var _this = this;

        return _.each(['favorites', 'more', 'concluded', 'groups'], function(key) {
          return _this.truncate_course_names(course_data[key]);
        });
      };

      CourseSelectionView.prototype.truncate_course_names = function(courses) {
        return _.each(courses, this.truncate_course);
      };

      CourseSelectionView.prototype.truncate_course = function(course) {
        var name, truncated;

        name = course['name'];
        truncated = this.middle_truncate(name);
        if (name !== truncated) {
          return course['truncated_name'] = truncated;
        }
      };

      CourseSelectionView.prototype.middle_truncate = function(name) {
        if (name.length > 25) {
          return name.slice(0, 10) + "&hellip;" + name.slice(-10);
        } else {
          return name;
        }
      };

      return CourseSelectionView;

    })(View);
  });

}).call(this);
