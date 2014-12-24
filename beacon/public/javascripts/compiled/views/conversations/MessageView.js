(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'Backbone', 'underscore', 'jst/conversations/message'], function(I18n, _arg, _, template) {
    var MessageView, View, _ref;

    View = _arg.View;
    return MessageView = (function(_super) {
      __extends(MessageView, _super);

      function MessageView() {
        _ref = MessageView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageView.prototype.tagName = 'li';

      MessageView.prototype.template = template;

      MessageView.prototype.els = {
        '.star-btn': '$starBtn',
        '.read-state': '$readBtn'
      };

      MessageView.prototype.events = {
        'click': 'onSelect',
        'click .open-message': 'onSelect',
        'click .star-btn': 'toggleStar',
        'click .read-state': 'toggleRead',
        'mousedown': 'onMouseDown'
      };

      MessageView.prototype.messages = {
        read: I18n.t('mark_as_read', 'Mark as read'),
        unread: I18n.t('mark_as_unread', 'Mark as unread'),
        star: I18n.t('star_conversation', 'Star conversation'),
        unstar: I18n.t('unstar_conversation', 'Unstar conversation')
      };

      MessageView.prototype.initialize = function() {
        MessageView.__super__.initialize.apply(this, arguments);
        return this.attachModel();
      };

      MessageView.prototype.attachModel = function() {
        var _this = this;

        this.model.on('change:starred', function() {
          return _this.$starBtn.toggleClass('active');
        });
        this.model.on('change:workflow_state', function() {
          return _this.$readBtn.toggleClass('read', _this.model.get('workflow_state') !== 'unread');
        });
        return this.model.on('change:selected', function(m) {
          return _this.$el.toggleClass('active', m.get('selected'));
        });
      };

      MessageView.prototype.onSelect = function(e) {
        var modifier;

        if (e && e.target.className.match(/star|read-state/)) {
          return;
        }
        if (e.shiftKey) {
          return this.model.collection.selectRange(this.model);
        }
        modifier = e.metaKey || e.ctrlKey;
        if (this.model.get('selected') && modifier) {
          return this.deselect(modifier);
        } else {
          return this.select(modifier);
        }
      };

      MessageView.prototype.select = function(modifier) {
        if (!modifier) {
          _.each(this.model.collection.without(this.model), function(m) {
            return m.set('selected', false);
          });
        }
        this.model.set('selected', true);
        if (this.model.unread()) {
          return this.model.set('workflow_state', 'read');
        }
      };

      MessageView.prototype.deselect = function(modifier) {
        if (modifier) {
          return this.model.set('selected', false);
        }
      };

      MessageView.prototype.toggleStar = function(e) {
        e.preventDefault();
        this.model.toggleStarred();
        this.model.save();
        return this.$starBtn.attr({
          'aria-checked': this.model.starred(),
          title: this.model.starred() ? this.messages.unstar : this.messages.star
        });
      };

      MessageView.prototype.toggleRead = function(e) {
        e.preventDefault();
        this.model.toggleReadState();
        this.model.save();
        return this.$readBtn.attr({
          'aria-checked': this.model.unread(),
          title: this.model.unread() ? this.messages.read : this.messages.unread
        });
      };

      MessageView.prototype.onMouseDown = function(e) {
        if (e.shiftKey) {
          e.preventDefault();
          return setTimeout(function() {
            return window.getSelection().removeAllRanges();
          }, 0);
        }
      };

      MessageView.prototype.toJSON = function() {
        return this.model.toJSON().conversation;
      };

      return MessageView;

    })(View);
  });

}).call(this);
