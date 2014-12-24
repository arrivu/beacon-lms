(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussions', 'jquery', 'underscore', 'Backbone', 'jst/DiscussionTopics/discussion', 'compiled/views/PublishIconView', 'compiled/views/ToggleableSubscriptionIconView', 'compiled/views/MoveDialogView'], function(I18n, $, _, _arg, template, PublishIconView, ToggleableSubscriptionIconView, MoveDialogView) {
    var DiscussionView, View, _ref;

    View = _arg.View;
    return DiscussionView = (function(_super) {
      __extends(DiscussionView, _super);

      function DiscussionView() {
        this.renderPublishChange = __bind(this.renderPublishChange, this);
        this.hide = __bind(this.hide, this);
        this.togglePinned = __bind(this.togglePinned, this);
        this.previousDiscussionInGroup = __bind(this.previousDiscussionInGroup, this);
        this.goToPrevItem = __bind(this.goToPrevItem, this);
        this.onDelete = __bind(this.onDelete, this);
        this.toggleLocked = __bind(this.toggleLocked, this);        _ref = DiscussionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionView.prototype.template = template;

      DiscussionView.prototype.tagName = 'li';

      DiscussionView.prototype.className = 'discussion';

      DiscussionView.prototype.messages = {
        confirm: I18n.t('confirm_delete_discussion_topic', 'Are you sure you want to delete this discussion topic?'),
        "delete": I18n.t('delete', 'Delete'),
        user_subscribed: I18n.t('subscribed_hint', 'You are subscribed to this topic. Click to unsubscribe.'),
        user_unsubscribed: I18n.t('unsubscribed_hint', 'You are not subscribed to this topic. Click to subscribe.')
      };

      DiscussionView.prototype.events = {
        'click .icon-lock': 'toggleLocked',
        'click .icon-pin': 'togglePinned',
        'click .icon-trash': 'onDelete',
        'click': 'onClick'
      };

      DiscussionView.prototype.defaults = {
        pinnable: false
      };

      DiscussionView.prototype.els = {
        '.screenreader-only': '$title',
        '.discussion-row': '$row',
        '.move_item': '$moveItemButton',
        '.discussion-actions .al-trigger': '$gearButton'
      };

      DiscussionView.optionProperty('lockable');

      DiscussionView.optionProperty('pinnable');

      if (ENV.permissions.publish) {
        DiscussionView.child('publishIcon', '[data-view=publishIcon]');
      }

      DiscussionView.child('toggleableSubscriptionIcon', '[data-view=toggleableSubscriptionIcon]');

      DiscussionView.prototype.initialize = function(options) {
        this.attachModel();
        if (ENV.permissions.publish) {
          options.publishIcon = new PublishIconView({
            model: this.model
          });
        }
        options.toggleableSubscriptionIcon = new ToggleableSubscriptionIconView({
          model: this.model
        });
        this.moveItemView = new MoveDialogView({
          model: this.model,
          nested: true,
          closeTarget: this.$el.find('a[id=manage_link]'),
          saveURL: function() {
            return this.model.collection.reorderURL();
          }
        });
        return DiscussionView.__super__.initialize.apply(this, arguments);
      };

      DiscussionView.prototype.render = function() {
        DiscussionView.__super__.render.apply(this, arguments);
        this.$el.attr('data-id', this.model.get('id'));
        this.moveItemView.setTrigger(this.$moveItemButton);
        return this;
      };

      DiscussionView.prototype.toggleLocked = function(e) {
        var locked, pinned;

        e.preventDefault();
        locked = !this.model.get('locked');
        pinned = locked ? false : this.model.get('pinned');
        this.model.updateBucket({
          locked: locked,
          pinned: pinned
        });
        this.render();
        return this.$gearButton.focus();
      };

      DiscussionView.prototype.onDelete = function(e) {
        e.preventDefault();
        if (confirm(this.messages.confirm)) {
          this.goToPrevItem();
          return this["delete"]();
        } else {
          return this.$el.find('a[id=manage_link]').focus();
        }
      };

      DiscussionView.prototype["delete"] = function() {
        this.model.destroy();
        return this.$el.remove();
      };

      DiscussionView.prototype.goToPrevItem = function() {
        if (this.previousDiscussionInGroup() != null) {
          return $('#' + this.previousDiscussionInGroup().id + '_discussion_content').attr("tabindex", -1).focus();
        } else if (this.model.get('pinned')) {
          return $('.pinned&.discussion-list').attr("tabindex", -1).focus();
        } else if (this.model.get('locked')) {
          return $('.locked&.discussion-list').attr("tabindex", -1).focus();
        } else {
          return $('.open&.discussion-list').attr("tabindex", -1).focus();
        }
      };

      DiscussionView.prototype.previousDiscussionInGroup = function() {
        var current_index;

        current_index = this.model.collection.models.indexOf(this.model);
        return this.model.collection.models[current_index - 1];
      };

      DiscussionView.prototype.togglePinned = function(e) {
        e.preventDefault();
        return this.model.updateBucket({
          pinned: !this.model.get('pinned')
        });
      };

      DiscussionView.prototype.onClick = function(e) {
        if (this.model.get('preventClick')) {
          return;
        }
        if (_.contains(['A', 'I'], e.target.nodeName)) {
          return;
        }
        return window.location = this.model.get('html_url');
      };

      DiscussionView.prototype.hide = function() {
        return this.$el.toggle(!this.model.get('hidden'));
      };

      DiscussionView.prototype.toJSON = function() {
        var base,
          _this = this;

        base = _.extend(this.model.toJSON(), this.options);
        if (this.model.get('locked') && !_.intersection(ENV.current_user_roles, ['teacher', 'ta', 'admin']).length) {
          base.permissions["delete"] = false;
        }
        base.display_last_reply_at = I18n.l("#date.formats.medium", base.last_reply_at);
        base.ENV = ENV;
        base.discussion_topic_menu_tools = ENV.discussion_topic_menu_tools;
        _.each(base.discussion_topic_menu_tools, function(tool) {
          return tool.url = tool.base_url + ("&discussion_topics[]=" + (_this.model.get("id")));
        });
        return base;
      };

      DiscussionView.prototype.renderPublishChange = function() {
        var _ref1;

        if ((_ref1 = this.publishIcon) != null) {
          _ref1.render();
        }
        if (ENV.permissions.publish) {
          if (this.model.get('published')) {
            this.$row.removeClass('discussion-unpublished');
            return this.$row.addClass('discussion-published');
          } else {
            this.$row.removeClass('discussion-published');
            return this.$row.addClass('discussion-unpublished');
          }
        }
      };

      DiscussionView.prototype.attachModel = function() {
        this.model.on('change:hidden', this.hide);
        return this.model.on('change:published', this.renderPublishChange);
      };

      return DiscussionView;

    })(View);
  });

}).call(this);
