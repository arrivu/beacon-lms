(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['i18n!conversations', 'jquery', 'underscore', 'Backbone', 'compiled/models/Message', 'compiled/collections/MessageCollection', 'compiled/views/conversations/MessageView', 'compiled/views/conversations/MessageListView', 'compiled/views/conversations/MessageDetailView', 'compiled/views/conversations/MessageFormDialog', 'compiled/views/conversations/InboxHeaderView', 'compiled/util/deparam', 'compiled/collections/CourseCollection', 'compiled/collections/FavoriteCourseCollection', 'compiled/collections/GroupCollection', 'compiled/behaviors/unread_conversations', 'jquery.disableWhileLoading'], function(I18n, $, _, Backbone, Message, MessageCollection, MessageView, MessageListView, MessageDetailView, MessageFormDialog, InboxHeaderView, deparam, CourseCollection, FavoriteCourseCollection, GroupCollection) {
    var ConversationsRouter, _ref;

    ConversationsRouter = (function(_super) {
      __extends(ConversationsRouter, _super);

      function ConversationsRouter() {
        this.onKeyDown = __bind(this.onKeyDown, this);
        this.onSearch = __bind(this.onSearch, this);
        this.onNewConversations = __bind(this.onNewConversations, this);
        this.onAddMessage = __bind(this.onAddMessage, this);
        this.onSubmit = __bind(this.onSubmit, this);
        this._replyFromRemote = __bind(this._replyFromRemote, this);
        this.onCourse = __bind(this.onCourse, this);
        this.onFilter = __bind(this.onFilter, this);
        this.onStarToggle = __bind(this.onStarToggle, this);
        this.onForward = __bind(this.onForward, this);
        this.onMarkRead = __bind(this.onMarkRead, this);
        this.onMarkUnread = __bind(this.onMarkUnread, this);
        this.onCompose = __bind(this.onCompose, this);
        this.onDelete = __bind(this.onDelete, this);
        this.onArchive = __bind(this.onArchive, this);
        this.onReplyAll = __bind(this.onReplyAll, this);
        this.onReply = __bind(this.onReply, this);
        this.selectConversation = __bind(this.selectConversation, this);
        this.onSelected = __bind(this.onSelected, this);        _ref = ConversationsRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ConversationsRouter.prototype.routes = {
        '': 'index',
        'filter=:state': 'filter'
      };

      ConversationsRouter.prototype.messages = {
        confirmDelete: I18n.t('confirm.delete_conversation', 'Are you sure you want to delete your copy of this conversation? This action cannot be undone.'),
        messageDeleted: I18n.t('message_deleted', 'Message Deleted!')
      };

      ConversationsRouter.prototype.sendingCount = 0;

      ConversationsRouter.prototype.initialize = function() {
        var dfd;

        dfd = this._initCollections();
        this._initViews();
        this._attachEvents();
        if (this._isRemoteLaunch()) {
          return dfd.then(this._replyFromRemote);
        }
      };

      ConversationsRouter.prototype.param = function(name) {
        var regex, value;

        regex = new RegExp("" + name + "=([^&]+)");
        value = window.location.search.match(regex);
        if (value) {
          return decodeURIComponent(value[1]);
        } else {
          return null;
        }
      };

      ConversationsRouter.prototype.batchUpdate = function(event, fn) {
        var messages,
          _this = this;

        if (fn == null) {
          fn = $.noop;
        }
        messages = _.map(this.list.selectedMessages, function(message) {
          fn.call(_this, message);
          return message.get('id');
        });
        $.ajaxJSON('/api/v1/conversations', 'PUT', {
          'conversation_ids[]': messages,
          event: event
        });
        if (event === 'destroy') {
          this.list.selectedMessages = [];
        }
        if (event === 'archive' && this.filters.type !== 'sent') {
          this.list.selectedMessages = [];
        }
        if (event === 'mark_as_read' && this.filters.type === 'archived') {
          this.list.selectedMessages = [];
        }
        if (event === 'unstar' && this.filters.type === 'starred') {
          this.list.selectedMessages = [];
        }
        return messages;
      };

      ConversationsRouter.prototype.lastFetch = null;

      ConversationsRouter.prototype.onSelected = function(model) {
        var messages;

        if (this.lastFetch) {
          this.lastFetch.abort();
        }
        this.header.onModelChange(null, this.model);
        this.detail.onModelChange(null, this.model);
        this.model = model;
        messages = this.list.selectedMessages;
        if (messages.length === 0) {
          delete this.detail.model;
          return this.detail.render();
        } else if (messages.length > 1) {
          delete this.detail.model;
          this.detail.onModelChange(messages[0], null);
          this.detail.render({
            batch: true
          });
          this.header.onModelChange(messages[0], null);
          this.header.toggleReplyBtn(true);
          this.header.toggleReplyAllBtn(true);
          this.header.hideForwardBtn(true);
        } else {
          model = this.list.selectedMessage();
          if (model.get('messages')) {
            return this.selectConversation(model);
          } else {
            this.lastFetch = model.fetch({
              data: {
                include_participant_contexts: false,
                include_private_conversation_enrollments: false
              },
              success: this.selectConversation
            });
            return this.detail.$el.disableWhileLoading(this.lastFetch);
          }
        }
      };

      ConversationsRouter.prototype.selectConversation = function(model) {
        this.header.onModelChange(model, null);
        this.detail.onModelChange(model, null);
        return this.detail.render();
      };

      ConversationsRouter.prototype.onReply = function(message) {
        return this._delegateReply(message, 'reply');
      };

      ConversationsRouter.prototype.onReplyAll = function(message) {
        return this._delegateReply(message, 'replyAll');
      };

      ConversationsRouter.prototype._delegateReply = function(message, type) {
        var btn, trigger;

        btn = type === 'reply' ? 'reply-btn' : 'reply-all-btn';
        if (message) {
          trigger = $(".message-item-view[data-id=" + message.id + "] ." + btn);
        } else {
          trigger = $("#" + btn);
        }
        return this.compose.show(this.detail.model, {
          to: type,
          trigger: trigger,
          message: message
        });
      };

      ConversationsRouter.prototype.onArchive = function() {
        var action, messages;

        action = this.list.selectedMessage().get('workflow_state') === 'archived' ? 'mark_as_read' : 'archive';
        messages = this.batchUpdate(action, function(m) {
          var newState;

          newState = action === 'mark_as_read' ? 'read' : 'archived';
          m.set('workflow_state', newState);
          return this.header.onArchivedStateChange(m);
        });
        if (_.include(['inbox', 'archived'], this.filters.type)) {
          this.list.collection.remove(messages);
          return this.selectConversation(null);
        }
      };

      ConversationsRouter.prototype.onDelete = function() {
        var messages;

        if (!confirm(this.messages.confirmDelete)) {
          return;
        }
        messages = this.batchUpdate('destroy');
        delete this.detail.model;
        this.list.collection.remove(messages);
        this.header.updateUi(null);
        $.flashMessage(this.messages.messageDeleted);
        return this.detail.render();
      };

      ConversationsRouter.prototype.onCompose = function(e) {
        return this.compose.show(null, {
          trigger: $('#compose-btn')
        });
      };

      ConversationsRouter.prototype.index = function() {
        return this.filter('');
      };

      ConversationsRouter.prototype.filter = function(state) {
        var filters;

        filters = this.filters = deparam(state);
        this.header.displayState(filters);
        this.selectConversation(null);
        this.list.selectedMessages = [];
        this.list.collection.reset();
        this.list.collection.setParam('scope', filters.type);
        this.list.collection.setParam('filter', this._currentFilter());
        this.list.collection.setParam('filter_mode', 'and');
        this.list.collection.setParam('include_private_conversation_enrollments', false);
        this.list.collection.fetch();
        return this.compose.setDefaultCourse(filters.course);
      };

      ConversationsRouter.prototype.onMarkUnread = function() {
        return this.batchUpdate('mark_as_unread', function(m) {
          return m.toggleReadState(false);
        });
      };

      ConversationsRouter.prototype.onMarkRead = function() {
        return this.batchUpdate('mark_as_read', function(m) {
          return m.toggleReadState(true);
        });
      };

      ConversationsRouter.prototype.onForward = function(message) {
        var model, trigger;

        model = message ? (model = this.detail.model.clone(), model.handleMessages(), model.set('messages', _.filter(model.get('messages'), function(m) {
          return m.id === message.id || (_.include(m.participating_user_ids, message.author_id) && m.created_at < message.created_at);
        })), trigger = $(".message-item-view[data-id=" + message.id + "] .al-trigger"), model) : (trigger = $('#admin-btn'), this.detail.model);
        return this.compose.show(model, {
          to: 'forward',
          trigger: trigger
        });
      };

      ConversationsRouter.prototype.onStarToggle = function() {
        var event, messages;

        event = this.list.selectedMessage().get('starred') ? 'unstar' : 'star';
        messages = this.batchUpdate(event, function(m) {
          return m.toggleStarred(event === 'star');
        });
        if (this.filters.type === 'starred') {
          if (event === 'unstar') {
            this.selectConversation(null);
          }
          return this.list.collection.remove(messages);
        }
      };

      ConversationsRouter.prototype.onFilter = function(filters) {
        return this.navigate('filter=' + $.param(filters), {
          trigger: true
        });
      };

      ConversationsRouter.prototype.onCourse = function(course) {
        return this.list.updateCourse(course);
      };

      ConversationsRouter.prototype._isRemoteLaunch = function() {
        return !!window.location.search.match(/user_id/);
      };

      ConversationsRouter.prototype._replyFromRemote = function() {
        return this.compose.show(null, {
          user: {
            id: this.param('user_id'),
            name: this.param('user_name')
          },
          context: this.param('context_id'),
          remoteLaunch: true
        });
      };

      ConversationsRouter.prototype._initCollections = function() {
        this.courses = {
          favorites: new FavoriteCourseCollection(),
          all: new CourseCollection(),
          groups: new GroupCollection()
        };
        return this.courses.favorites.fetch();
      };

      ConversationsRouter.prototype._initViews = function() {
        this._initListView();
        this._initDetailView();
        this._initHeaderView();
        return this._initComposeDialog();
      };

      ConversationsRouter.prototype._attachEvents = function() {
        this.list.collection.on('change:selected', this.onSelected);
        this.header.on('compose', this.onCompose);
        this.header.on('reply', this.onReply);
        this.header.on('reply-all', this.onReplyAll);
        this.header.on('archive', this.onArchive);
        this.header.on('delete', this.onDelete);
        this.header.on('filter', this.onFilter);
        this.header.on('course', this.onCourse);
        this.header.on('mark-unread', this.onMarkUnread);
        this.header.on('mark-read', this.onMarkRead);
        this.header.on('forward', this.onForward);
        this.header.on('star-toggle', this.onStarToggle);
        this.header.on('search', this.onSearch);
        this.compose.on('close', this.onCloseCompose);
        this.compose.on('addMessage', this.onAddMessage);
        this.compose.on('addMessage', this.list.updateMessage);
        this.compose.on('newConversations', this.onNewConversations);
        this.compose.on('submitting', this.onSubmit);
        this.detail.on('reply', this.onReply);
        this.detail.on('reply-all', this.onReplyAll);
        this.detail.on('forward', this.onForward);
        this.detail.on('star-toggle', this.onStarToggle);
        this.detail.on('delete', this.onDelete);
        this.detail.on('archive', this.onArchive);
        $(document).ready(this.onPageLoad);
        return $(window).keydown(this.onKeyDown);
      };

      ConversationsRouter.prototype.onPageLoad = function(e) {
        return $('#main').css({
          display: 'block',
          top: $('#header').height()
        });
      };

      ConversationsRouter.prototype.onSubmit = function(dfd) {
        var _this = this;

        this._incrementSending(1);
        return dfd.always(function() {
          return _this._incrementSending(-1);
        });
      };

      ConversationsRouter.prototype.onAddMessage = function(message, conversation) {
        var model;

        model = this.list.collection.get(conversation.id);
        if ((model != null) && model.get('messages')) {
          message.context_name = model.messageCollection.last().get('context_name');
          model.get('messages').unshift(message);
          model.trigger('change:messages');
          if (model === this.detail.model) {
            return this.detail.render();
          }
        }
      };

      ConversationsRouter.prototype.onNewConversations = function(conversations) {};

      ConversationsRouter.prototype._incrementSending = function(increment) {
        this.sendingCount += increment;
        return this.header.toggleSending(this.sendingCount > 0);
      };

      ConversationsRouter.prototype._currentFilter = function() {
        var filter;

        filter = this.searchTokens || [];
        if (this.filters.course) {
          filter = filter.concat(this.filters.course);
        }
        return filter;
      };

      ConversationsRouter.prototype.onSearch = function(tokens) {
        this.list.collection.reset();
        this.searchTokens = tokens.length ? tokens : null;
        this.list.collection.setParam('filter', this._currentFilter());
        delete this.detail.model;
        this.list.selectedMessages = [];
        this.detail.render();
        return this.list.collection.fetch();
      };

      ConversationsRouter.prototype._initListView = function() {
        this.list = new MessageListView({
          collection: new MessageCollection,
          el: $('.message-list'),
          scrollContainer: $('.message-list-scroller'),
          buffer: 50
        });
        return this.list.render();
      };

      ConversationsRouter.prototype._initDetailView = function() {
        this.detail = new MessageDetailView({
          el: $('.message-detail')
        });
        return this.detail.render();
      };

      ConversationsRouter.prototype._initHeaderView = function() {
        this.header = new InboxHeaderView({
          el: $('header.panel'),
          courses: this.courses
        });
        return this.header.render();
      };

      ConversationsRouter.prototype._initComposeDialog = function() {
        return this.compose = new MessageFormDialog({
          courses: this.courses,
          folderId: ENV.CONVERSATIONS.ATTACHMENTS_FOLDER_ID,
          account_context_code: ENV.CONVERSATIONS.ACCOUNT_CONTEXT_CODE
        });
      };

      ConversationsRouter.prototype.onKeyDown = function(e) {
        var ctrl, nodeName;

        nodeName = e.target.nodeName.toLowerCase();
        if (nodeName === 'input' || nodeName === 'textarea') {
          return;
        }
        ctrl = e.ctrlKey || e.metaKey;
        if (e.which === 65 && ctrl) {
          e.preventDefault();
          this.list.selectAll();
        }
      };

      return ConversationsRouter;

    })(Backbone.Router);
    window.conversationsRouter = new ConversationsRouter;
    return Backbone.history.start();
  });

}).call(this);
