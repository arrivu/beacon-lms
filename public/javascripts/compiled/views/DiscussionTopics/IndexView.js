(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'jst/DiscussionTopics/IndexView', 'compiled/views/DiscussionTopics/DiscussionsSettingsView', 'compiled/views/DiscussionTopics/UserSettingsView'], function($, _, _arg, template, DiscussionsSettingsView, UserSettingsView) {
    var IndexView, View, _ref;

    View = _arg.View;
    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        this.filterResults = __bind(this.filterResults, this);
        this.filter = __bind(this.filter, this);        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.prototype.template = template;

      IndexView.prototype.el = '#content';

      IndexView.child('openDiscussionView', '.open.discussion-list');

      IndexView.child('lockedDiscussionView', '.locked.discussion-list');

      IndexView.child('pinnedDiscussionView', '.pinned.discussion-list');

      IndexView.prototype.events = {
        'click .ig-header .element_toggler': 'toggleDiscussionList',
        'focus .accessibility-warning': 'handleAccessibilityWarningFocus',
        'blur .accessibility-warning': 'handleAccessibilityWarningBlur',
        'keydown .ig-header .element_toggler': 'toggleDiscussionList',
        'click .discussion-list': 'toggleDiscussionListWithVo',
        'click #edit_discussions_settings': 'toggleSettingsView',
        'change #onlyUnread, #onlyGraded': 'filterResults',
        'keyup #searchTerm': 'filterResults'
      };

      IndexView.prototype.filters = {
        onlyGraded: {
          active: false,
          fn: function(model) {
            return model.get('assignment_id');
          }
        },
        onlyUnread: {
          active: false,
          fn: function(model) {
            return model.get('unread_count') > 0 || model.get('read_state') === 'unread';
          }
        },
        searchTerm: {
          active: false,
          fn: function(model, term) {
            var regex, _ref1;

            if (!term) {
              return;
            }
            regex = new RegExp(term, 'ig');
            return model.get('title').match(regex) || ((_ref1 = model.get('user_name')) != null ? _ref1.match(regex) : void 0) || model.summary().match(regex);
          }
        }
      };

      IndexView.prototype.collections = function() {
        return [this.options.openDiscussionView.collection, this.options.lockedDiscussionView.collection, this.options.pinnedDiscussionView.collection];
      };

      IndexView.prototype.initialize = function() {
        IndexView.__super__.initialize.apply(this, arguments);
        return this.listenTo(this.options.pinnedDiscussionView.collection, "add remove", this.handleAddRemovePinnedDiscussion);
      };

      IndexView.prototype.afterRender = function() {
        this.$('#discussionsFilter').buttonset();
        return this.setAccessibilityWarningState();
      };

      IndexView.prototype.activeFilters = function() {
        var _this = this;

        return _.select(this.filters, function(value, key) {
          return value.active;
        });
      };

      IndexView.prototype.filter = function(model, term) {
        return _.all(this.activeFilters(), function(filter) {
          return filter.fn.call(model, model, term);
        });
      };

      IndexView.prototype.filterResults = function(e) {
        var term,
          _this = this;

        if (e.target.type === 'checkbox') {
          this.filters[e.target.id].active = $(e.target).prop('checked');
          if ($('#searchTerm').val().length > 0) {
            term = $('#searchTerm').val();
          }
        } else {
          this.filters[e.target.id].active = $(e.target).val().length > 0;
          term = $(e.target).val();
        }
        return _.each(this.collections(), function(collection) {
          return collection.each(function(model) {
            if (_this.activeFilters().length > 0) {
              return model.set('hidden', !_this.filter(model, term));
            } else {
              return model.set('hidden', false);
            }
          });
        });
      };

      IndexView.prototype.toggleSettingsView = function() {
        return this.settingsView().toggle();
      };

      IndexView.prototype.toggleDiscussionList = function(e) {
        var $currentTarget, $icon, _ref1;

        $currentTarget = $(e.currentTarget);
        if (e.type === 'keydown') {
          if ((_ref1 = e.keyCode) === 13 || _ref1 === 32) {
            e.preventDefault();
            $currentTarget.click();
          }
          return;
        }
        $icon = $currentTarget.find('i');
        while ($currentTarget.length && $icon.length === 0) {
          $currentTarget = $currentTarget.parent();
          $icon = $currentTarget.find('i');
        }
        if (!$icon.length) {
          return;
        }
        return $icon.toggleClass('icon-mini-arrow-down').toggleClass('icon-mini-arrow-right');
      };

      IndexView.prototype.setAccessibilityWarningState = function() {
        if (this.options.pinnedDiscussionView.collection.length > 1) {
          return $('.accessibility-warning').show();
        } else {
          return $('.accessibility-warning').hide();
        }
      };

      IndexView.prototype.handleAddRemovePinnedDiscussion = function() {
        return this.setAccessibilityWarningState();
      };

      IndexView.prototype.handleAccessibilityWarningFocus = function(e) {
        var $accessibilityWarning;

        if (this.options.pinnedDiscussionView.collection.length > 1) {
          $accessibilityWarning = $(e.currentTarget);
          return $accessibilityWarning.removeClass('screenreader-only');
        }
      };

      IndexView.prototype.handleAccessibilityWarningBlur = function(e) {
        var $accessibilityWarning;

        if (this.options.pinnedDiscussionView.collection.length > 1) {
          $accessibilityWarning = $(e.currentTarget);
          return $accessibilityWarning.addClass('screenreader-only');
        }
      };

      IndexView.prototype.toggleDiscussionListWithVo = function(e) {
        var _base;

        if (!(e.target === e.delegateTarget || (typeof (_base = e.target).isSameNode === "function" ? _base.isSameNode(e.delegateTarget) : void 0))) {
          return;
        }
        $(e.target).find('.ig-header .element_toggler').first().click();
        return false;
      };

      IndexView.prototype.settingsView = function() {
        this._settingsView || (this._settingsView = this.options.permissions.change_settings ? new DiscussionsSettingsView() : new UserSettingsView());
        return this._settingsView;
      };

      IndexView.prototype.toJSON = function() {
        return _.extend({}, {
          options: this.options,
          length: 1,
          atLeastOnePageFetched: true,
          new_topic_url: ENV.newTopicURL
        });
      };

      return IndexView;

    })(View);
  });

}).call(this);
