(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/PaginatedCollectionView', 'compiled/views/conversations/MessageView', 'jst/conversations/messageList'], function(PaginatedCollectionView, MessageView, template) {
    var MessageListView;

    return MessageListView = (function(_super) {
      __extends(MessageListView, _super);

      MessageListView.prototype.tagName = 'div';

      MessageListView.prototype.itemView = MessageView;

      MessageListView.prototype.template = template;

      MessageListView.prototype.course = {};

      MessageListView.prototype.selectedMessages = [];

      MessageListView.prototype.autoFetch = true;

      MessageListView.prototype.events = {
        'click': 'onClick'
      };

      function MessageListView() {
        this.updateMessage = __bind(this.updateMessage, this);
        this.trackSelectedMessages = __bind(this.trackSelectedMessages, this);        MessageListView.__super__.constructor.apply(this, arguments);
        this.attachEvents();
      }

      MessageListView.prototype.attachEvents = function() {
        return this.collection.on('change:selected', this.trackSelectedMessages);
      };

      MessageListView.prototype.trackSelectedMessages = function(model) {
        if (model.get('selected')) {
          return this.selectedMessages.push(model);
        } else {
          return this.selectedMessages.splice(this.selectedMessages.indexOf(model), 1);
        }
      };

      MessageListView.prototype.onClick = function(e) {
        if (e.target !== this.el) {
          return;
        }
        return this.collection.each(function(m) {
          return m.set('selected', false);
        });
      };

      MessageListView.prototype.updateCourse = function(course) {
        return this.course = course;
      };

      MessageListView.prototype.selectedMessage = function() {
        return this.selectedMessages[0];
      };

      MessageListView.prototype.updateMessage = function(message, thread) {
        var selectedThread, updatedThread;

        selectedThread = this.collection.where({
          selected: true
        })[0];
        updatedThread = this.collection.get(thread.id);
        updatedThread.set({
          last_message: thread.last_message,
          last_authored_message_at: new Date().toString(),
          message_count: updatedThread.get('messages').length
        });
        this.collection.sort();
        this.render();
        return selectedThread != null ? selectedThread.view.select() : void 0;
      };

      MessageListView.prototype.afterRender = function() {
        MessageListView.__super__.afterRender.apply(this, arguments);
        this.$('.current-context').text(this.course.name);
        return this.$('.list-header')[this.course.name ? 'show' : 'hide']();
      };

      MessageListView.prototype.selectAll = function() {
        return this.collection.each(function(x) {
          return x.set('selected', true);
        });
      };

      return MessageListView;

    })(PaginatedCollectionView);
  });

}).call(this);
