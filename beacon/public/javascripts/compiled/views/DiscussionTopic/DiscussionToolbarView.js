(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'Backbone', 'underscore', 'jqueryui/button'], function(I18n, _arg, _) {
    var DiscussionToolbarView, View, _ref;

    View = _arg.View;
    return DiscussionToolbarView = (function(_super) {
      __extends(DiscussionToolbarView, _super);

      function DiscussionToolbarView() {
        this.clearInputs = __bind(this.clearInputs, this);        _ref = DiscussionToolbarView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionToolbarView.prototype.els = {
        '#discussion-search': '$searchInput',
        '#onlyUnread': '$unread',
        '.disableWhileFiltering': '$disableWhileFiltering'
      };

      DiscussionToolbarView.prototype.events = {
        'keyup #discussion-search': 'filterBySearch',
        'change #onlyUnread': 'toggleUnread',
        'click #collapseAll': 'collapseAll',
        'click #expandAll': 'expandAll'
      };

      DiscussionToolbarView.prototype.initialize = function() {
        DiscussionToolbarView.__super__.initialize.apply(this, arguments);
        return this.model.on('change', this.clearInputs);
      };

      DiscussionToolbarView.prototype.afterRender = function() {
        return this.$unread.button();
      };

      DiscussionToolbarView.prototype.filter = DiscussionToolbarView.prototype.afterRender;

      DiscussionToolbarView.prototype.clearInputs = function() {
        if (this.model.hasFilter()) {
          return;
        }
        this.$searchInput.val('');
        this.$unread.prop('checked', false);
        this.$unread.button('refresh');
        return this.maybeDisableFields();
      };

      DiscussionToolbarView.prototype.filterBySearch = _.debounce(function() {
        var value;

        value = this.$searchInput.val();
        if (value === '') {
          value = null;
        }
        this.model.set('query', value);
        return this.maybeDisableFields();
      }, 250);

      DiscussionToolbarView.prototype.toggleUnread = function() {
        var _this = this;

        return setTimeout(function() {
          _this.model.set('unread', _this.$unread.prop('checked'));
          return _this.maybeDisableFields();
        }, 50);
      };

      DiscussionToolbarView.prototype.collapseAll = function() {
        this.model.set('collapsed', true);
        return this.trigger('collapseAll');
      };

      DiscussionToolbarView.prototype.expandAll = function() {
        this.model.set('collapsed', false);
        return this.trigger('expandAll');
      };

      DiscussionToolbarView.prototype.maybeDisableFields = function() {
        return this.$disableWhileFiltering.attr('disabled', this.model.hasFilter());
      };

      return DiscussionToolbarView;

    })(View);
  });

}).call(this);
