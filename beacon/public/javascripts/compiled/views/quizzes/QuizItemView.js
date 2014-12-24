(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!quizzes.index', 'jquery', 'underscore', 'Backbone', 'compiled/views/PublishIconView', 'compiled/views/assignments/DateDueColumnView', 'compiled/views/assignments/DateAvailableColumnView', 'jst/quizzes/QuizItemView'], function(I18n, $, _, Backbone, PublishIconView, DateDueColumnView, DateAvailableColumnView, template) {
    var ItemView, _ref;

    return ItemView = (function(_super) {
      __extends(ItemView, _super);

      function ItemView() {
        this.updatePublishState = __bind(this.updatePublishState, this);
        this.onDelete = __bind(this.onDelete, this);
        this.clickRow = __bind(this.clickRow, this);        _ref = ItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ItemView.prototype.template = template;

      ItemView.prototype.tagName = 'li';

      ItemView.prototype.className = 'quiz';

      ItemView.child('publishIconView', '[data-view=publish-icon]');

      ItemView.child('dateDueColumnView', '[data-view=date-due]');

      ItemView.child('dateAvailableColumnView', '[data-view=date-available]');

      ItemView.prototype.events = {
        'click': 'clickRow',
        'click .delete-item': 'onDelete'
      };

      ItemView.prototype.messages = {
        confirm: I18n.t('confirms.delete_quiz', 'Are you sure you want to delete this quiz?'),
        multipleDates: I18n.t('multiple_due_dates', 'Multiple Dates')
      };

      ItemView.prototype.initialize = function(options) {
        this.initializeChildViews();
        this.observeModel();
        return ItemView.__super__.initialize.apply(this, arguments);
      };

      ItemView.prototype.initializeChildViews = function() {
        this.publishIconView = false;
        if (this.canManage()) {
          this.publishIconView = new PublishIconView({
            model: this.model
          });
        }
        this.dateDueColumnView = new DateDueColumnView({
          model: this.model
        });
        return this.dateAvailableColumnView = new DateAvailableColumnView({
          model: this.model
        });
      };

      ItemView.prototype.afterRender = function() {
        return this.$el.toggleClass('quiz-loading-overrides', !!this.model.get('loadingOverrides'));
      };

      ItemView.prototype.clickRow = function(e) {
        var row, target, title;

        target = $(e.target);
        if (target.parents('.ig-admin').length > 0 || target.hasClass('ig-title')) {
          return;
        }
        row = target.parents('li');
        title = row.find('.ig-title');
        if (title.length > 0) {
          return this.redirectTo(title.attr('href'));
        }
      };

      ItemView.prototype.redirectTo = function(path) {
        return location.href = path;
      };

      ItemView.prototype.onDelete = function(e) {
        e.preventDefault();
        if (confirm(this.messages.confirm)) {
          return this["delete"]();
        }
      };

      ItemView.prototype["delete"] = function() {
        this.model.destroy();
        return this.$el.remove();
      };

      ItemView.prototype.observeModel = function() {
        this.model.on('change:published', this.updatePublishState);
        return this.model.on('change:loadingOverrides', this.render);
      };

      ItemView.prototype.updatePublishState = function() {
        return this.$('.ig-row').toggleClass('ig-published', this.model.get('published'));
      };

      ItemView.prototype.canManage = function() {
        return ENV.PERMISSIONS.manage;
      };

      ItemView.prototype.toJSON = function() {
        var base,
          _this = this;

        base = _.extend(this.model.toJSON(), this.options);
        base.quiz_menu_tools = ENV.quiz_menu_tools;
        _.each(base.quiz_menu_tools, function(tool) {
          return tool.url = tool.base_url + ("&quizzes[]=" + (_this.model.get("id")));
        });
        if (this.model.get("multiple_due_dates")) {
          base.selector = this.model.get("id");
          base.link_text = this.messages.multipleDates;
          base.link_href = this.model.get("url");
        }
        return base;
      };

      return ItemView;

    })(Backbone.View);
  });

}).call(this);
