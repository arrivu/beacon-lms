(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'jquery', 'underscore', 'Backbone', 'compiled/models/Message', 'compiled/views/conversations/MessageItemView', 'jst/conversations/messageDetail', 'jst/conversations/noMessage'], function(I18n, $, _, _arg, Message, MessageItemView, template, noMessage) {
    var MessageDetailView, View, _ref;

    View = _arg.View;
    return MessageDetailView = (function(_super) {
      __extends(MessageDetailView, _super);

      function MessageDetailView() {
        _ref = MessageDetailView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageDetailView.prototype.events = {
        'click .message-detail-actions .reply-btn': 'onReply',
        'click .message-detail-actions .reply-all-btn': 'onReplyAll',
        'click .message-detail-actions .delete-btn': 'onDelete',
        'click .message-detail-actions .forward-btn': 'onForward',
        'click .message-detail-actions .archive-btn': 'onArchive',
        'click .message-detail-actions .star-toggle-btn': 'onStarToggle',
        'modelChange': 'onModelChange',
        'changed:starred': 'render'
      };

      MessageDetailView.prototype.tagName = 'div';

      MessageDetailView.prototype.messages = {
        star: I18n.t('star', 'Star'),
        unstar: I18n.t('unstar', 'Unstar'),
        archive: I18n.t('archive', 'Archive'),
        unarchive: I18n.t('unarchive', 'Unarchive')
      };

      MessageDetailView.prototype.render = function(options) {
        var $template, context,
          _this = this;

        if (options == null) {
          options = {};
        }
        MessageDetailView.__super__.render.apply(this, arguments);
        if (this.model) {
          context = this.model.toJSON().conversation;
          context.starToggleMessage = this.model.starred() ? this.messages['unstar'] : this.messages['star'];
          context.archiveToggleMessage = this.model.get('workflow_state') === 'archived' ? this.messages['unarchive'] : this.messages['archive'];
          $template = $(template(context));
          this.model.messageCollection.each(function(message) {
            var childView;

            if (!message.get('conversation_id')) {
              message.set('conversation_id', context.id);
            }
            childView = new MessageItemView({
              model: message
            }).render();
            $template.find('.message-content').append(childView.$el);
            _this.listenTo(childView, 'reply', function() {
              return _this.trigger('reply', message);
            });
            _this.listenTo(childView, 'reply-all', function() {
              return _this.trigger('reply-all', message);
            });
            return _this.listenTo(childView, 'forward', function() {
              return _this.trigger('forward', message);
            });
          });
        } else {
          $template = noMessage(options);
        }
        this.$el.html($template);
        this.$el.find('.subject').focus();
        this.$archiveToggle = this.$el.find('.archive-btn');
        this.$starToggle = this.$el.find('.star-toggle-btn');
        return this;
      };

      MessageDetailView.prototype.onModelChange = function(newModel) {
        this.detachModelEvents();
        this.model = newModel;
        return this.attachModelEvents();
      };

      MessageDetailView.prototype.detachModelEvents = function() {
        if (this.model) {
          return this.model.off(null, null, this);
        }
      };

      MessageDetailView.prototype.attachModelEvents = function() {
        if (this.model) {
          return this.model.on("change:starred change:workflow_state", _.debounce(this.updateLabels, 90), this);
        }
      };

      MessageDetailView.prototype.updateLabels = function() {
        this.$starToggle.text(this.model.starred() ? this.messages['unstar'] : this.messages['star']);
        return this.$archiveToggle.text(this.model.get('workflow_state') === 'archived' ? this.messages['unarchive'] : this.messages['archive']);
      };

      MessageDetailView.prototype.onStarToggle = function(e) {
        e.preventDefault();
        return this.trigger('star-toggle');
      };

      MessageDetailView.prototype.onReply = function(e) {
        e.preventDefault();
        return this.trigger('reply');
      };

      MessageDetailView.prototype.onReplyAll = function(e) {
        e.preventDefault();
        return this.trigger('reply-all');
      };

      MessageDetailView.prototype.onForward = function(e) {
        e.preventDefault();
        return this.trigger('forward');
      };

      MessageDetailView.prototype.onDelete = function(e) {
        e.preventDefault();
        return this.trigger('delete');
      };

      MessageDetailView.prototype.onArchive = function(e) {
        e.preventDefault();
        return this.trigger('archive');
      };

      return MessageDetailView;

    })(View);
  });

}).call(this);
