(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!context_modules', 'jquery', 'Backbone', 'compiled/collections/ModuleCollection', 'jst/modules/ProgressionStudentView', 'jst/modules/ProgressionModuleCollection', 'compiled/views/PaginatedCollectionView', 'compiled/views/modules/ProgressionModuleView'], function(I18n, $, Backbone, ModuleCollection, template, collectionTemplate, PaginatedCollectionView, ProgressionModuleView) {
    var ProgressionStudentView, _ref;

    return ProgressionStudentView = (function(_super) {
      __extends(ProgressionStudentView, _super);

      function ProgressionStudentView() {
        this.syncHeight = __bind(this.syncHeight, this);        _ref = ProgressionStudentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ProgressionStudentView.prototype.tagName = 'li';

      ProgressionStudentView.prototype.className = 'student';

      ProgressionStudentView.prototype.template = template;

      ProgressionStudentView.prototype.events = {
        'click': 'showProgressions'
      };

      ProgressionStudentView.prototype.initialize = function() {
        ProgressionStudentView.__super__.initialize.apply(this, arguments);
        this.$index = this.model.collection.view.$el;
        this.$students = this.$index.find('#progression_students');
        return this.$modules = this.$index.find('#progression_modules');
      };

      ProgressionStudentView.prototype.afterRender = function() {
        ProgressionStudentView.__super__.afterRender.apply(this, arguments);
        if (!this.model.collection.currentStudentView) {
          this.showProgressions();
        }
        return this.syncHeight();
      };

      ProgressionStudentView.prototype.createProgressions = function() {
        var modules, studentId, studentUrl;

        studentId = this.model.get('id');
        modules = new ModuleCollection(null, {
          course_id: ENV.COURSE_ID,
          per_page: 50,
          params: {
            student_id: studentId,
            include: ['items']
          }
        });
        modules.student_id = studentId;
        modules.syncHeight = this.syncHeight;
        modules.fetch();
        studentUrl = "" + ENV.COURSE_USERS_PATH + "/" + studentId;
        this.progressions = new PaginatedCollectionView({
          collection: modules,
          itemView: ProgressionModuleView,
          template: collectionTemplate,
          student: this.model.attributes,
          studentUrl: studentUrl,
          autoFetch: true
        });
        this.progressions.render();
        return this.progressions.$el.appendTo(this.$modules);
      };

      ProgressionStudentView.prototype.showProgressions = function() {
        var _ref1;

        this.$modules.attr('aria-busy', 'true');
        if ((_ref1 = this.model.collection.currentStudentView) != null) {
          _ref1.hideProgressions();
        }
        this.model.collection.currentStudentView = this;
        this.syncHeight();
        this.$el.addClass('active').attr('aria-selected', true);
        if (!this.progressions) {
          return this.createProgressions();
        } else {
          return this.progressions.show();
        }
      };

      ProgressionStudentView.prototype.hideProgressions = function() {
        this.progressions.hide();
        return this.$el.removeClass('active').removeAttr('aria-selected');
      };

      ProgressionStudentView.prototype.syncHeight = function() {
        var _this = this;

        return setTimeout(function() {
          _this.$students.height(_this.$modules.height());
          return _this.$students.find('.collectionViewItems').height((_this.$students.height() || 0) - (_this.$students.find('.header').height() || 16) - 16);
        }, 0);
      };

      return ProgressionStudentView;

    })(Backbone.View);
  });

}).call(this);
