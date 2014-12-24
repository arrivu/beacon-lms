(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'underscore', 'Backbone', 'compiled/views/conversations/CourseSelectionView', 'compiled/views/conversations/SearchView', 'vendor/bootstrap/bootstrap-dropdown', 'vendor/bootstrap-select/bootstrap-select'], function(I18n, _, _arg, CourseSelectionView, SearchView) {
    var InboxHeaderView, View, _ref;

    View = _arg.View;
    return InboxHeaderView = (function(_super) {
      __extends(InboxHeaderView, _super);

      function InboxHeaderView() {
        this.onFilterChange = __bind(this.onFilterChange, this);
        this.onSearch = __bind(this.onSearch, this);        _ref = InboxHeaderView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      InboxHeaderView.prototype.els = {
        '#compose-btn': '$composeBtn',
        '#reply-btn': '$replyBtn',
        '#reply-all-btn': '$replyAllBtn',
        '#archive-btn': '$archiveBtn',
        '#delete-btn': '$deleteBtn',
        '#type-filter': '$typeFilter',
        '#course-filter': '$courseFilter',
        '#admin-btn': '$adminBtn',
        '#mark-unread-btn': '$markUnreadBtn',
        '#mark-read-btn': '$markReadBtn',
        '#forward-btn': '$forwardBtn',
        '#star-toggle-btn': '$starToggleBtn',
        '#admin-menu': '$adminMenu',
        '#sending-message': '$sendingMessage',
        '#sending-spinner': '$sendingSpinner',
        '[role=search]': '$search'
      };

      InboxHeaderView.prototype.events = {
        'click #compose-btn': 'onCompose',
        'click #reply-btn': 'onReply',
        'click #reply-all-btn': 'onReplyAll',
        'click #archive-btn': 'onArchive',
        'click #delete-btn': 'onDelete',
        'change #type-filter': 'onFilterChange',
        'change #course-filter': 'onFilterChange',
        'click #mark-unread-btn': 'onMarkUnread',
        'click #mark-read-btn': 'onMarkRead',
        'click #forward-btn': 'onForward',
        'click #star-toggle-btn': 'onStarToggle'
      };

      InboxHeaderView.prototype.messages = {
        star: I18n.t('star', 'Star'),
        unstar: I18n.t('unstar', 'Unstar'),
        archive: I18n.t('archive', 'Archive'),
        unarchive: I18n.t('unarchive', 'Unarchive'),
        archive_conversation: I18n.t('archive_conversation', 'Archive conversation'),
        unarchive_conversation: I18n.t('unarchive_conversation', 'Unarchive conversation')
      };

      InboxHeaderView.prototype.spinnerOptions = {
        color: '#fff',
        lines: 10,
        length: 2,
        radius: 2,
        width: 2,
        left: 0
      };

      InboxHeaderView.prototype.render = function() {
        var spinner;

        InboxHeaderView.__super__.render.call(this);
        this.$typeFilter.selectpicker();
        this.courseView = new CourseSelectionView({
          el: this.$courseFilter,
          courses: this.options.courses
        });
        this.searchView = new SearchView({
          el: this.$search
        });
        this.searchView.on('search', this.onSearch);
        spinner = new Spinner(this.spinnerOptions);
        spinner.spin(this.$sendingSpinner[0]);
        return this.toggleSending(false);
      };

      InboxHeaderView.prototype.onSearch = function(tokens) {
        return this.trigger('search', tokens);
      };

      InboxHeaderView.prototype.onCompose = function(e) {
        return this.trigger('compose');
      };

      InboxHeaderView.prototype.onReply = function(e) {
        return this.trigger('reply');
      };

      InboxHeaderView.prototype.onReplyAll = function(e) {
        return this.trigger('reply-all');
      };

      InboxHeaderView.prototype.onArchive = function(e) {
        return this.trigger('archive');
      };

      InboxHeaderView.prototype.onDelete = function(e) {
        return this.trigger('delete');
      };

      InboxHeaderView.prototype.onMarkUnread = function(e) {
        e.preventDefault();
        return this.trigger('mark-unread');
      };

      InboxHeaderView.prototype.onMarkRead = function(e) {
        e.preventDefault();
        return this.trigger('mark-read');
      };

      InboxHeaderView.prototype.onForward = function(e) {
        e.preventDefault();
        return this.trigger('forward');
      };

      InboxHeaderView.prototype.onStarToggle = function(e) {
        e.preventDefault();
        return this.trigger('star-toggle');
      };

      InboxHeaderView.prototype.onModelChange = function(newModel, oldModel) {
        this.detachModelEvents(oldModel);
        this.attachModelEvents(newModel);
        return this.updateUi(newModel);
      };

      InboxHeaderView.prototype.updateUi = function(newModel) {
        this.toggleMessageBtns(!newModel || !newModel.get('selected'));
        this.onReadStateChange(newModel);
        this.onStarStateChange(newModel);
        return this.onArchivedStateChange(newModel);
      };

      InboxHeaderView.prototype.detachModelEvents = function(oldModel) {
        if (oldModel) {
          return oldModel.off(null, null, this);
        }
      };

      InboxHeaderView.prototype.attachModelEvents = function(newModel) {
        if (newModel) {
          newModel.on('change:workflow_state', this.onReadStateChange, this);
          return newModel.on('change:starred', this.onStarStateChange, this);
        }
      };

      InboxHeaderView.prototype.onReadStateChange = function(msg) {
        this.hideMarkUnreadBtn(!msg || msg.unread());
        this.hideMarkReadBtn(!msg || !msg.unread());
        return this.refreshMenu();
      };

      InboxHeaderView.prototype.onStarStateChange = function(msg) {
        var key;

        if (msg) {
          key = msg.starred() ? 'unstar' : 'star';
          this.$starToggleBtn.text(this.messages[key]);
        }
        return this.refreshMenu();
      };

      InboxHeaderView.prototype.onArchivedStateChange = function(msg) {
        var archived;

        if (!msg) {
          return;
        }
        archived = msg.get('workflow_state') === 'archived';
        this.$archiveBtn.find('i').attr('class', archived ? 'icon-remove-from-collection' : 'icon-collection-save');
        this.$archiveBtn.attr('title', archived ? this.messages['unarchive'] : this.messages['archive']);
        this.$archiveBtn.find('.screenreader-only').text(archived ? this.messages['unarchive_conversation'] : this.messages['archive_conversation']);
        return this.refreshMenu();
      };

      InboxHeaderView.prototype.refreshMenu = function() {
        if (this.$adminMenu.is('.ui-menu')) {
          return this.$adminMenu.menu('refresh');
        }
      };

      InboxHeaderView.prototype.filterObj = function(obj) {
        return _.object(_.filter(_.pairs(obj), function(x) {
          return !!x[1];
        }));
      };

      InboxHeaderView.prototype.onFilterChange = function(e) {
        var _ref1;

        if ((_ref1 = this.searchView) != null) {
          _ref1.autocompleteView.setContext(this.courseView.getCurrentContext());
        }
        return this.trigger('filter', this.filterObj({
          type: this.$typeFilter.val(),
          course: this.$courseFilter.val()
        }));
      };

      InboxHeaderView.prototype.displayState = function(state) {
        this.$typeFilter.selectpicker('val', state.type);
        this.courseView.setValue(state.course);
        return this.trigger('course', this.courseView.getCurrentContext());
      };

      InboxHeaderView.prototype.toggleMessageBtns = function(value) {
        this.toggleReplyBtn(value);
        this.toggleReplyAllBtn(value);
        this.toggleArchiveBtn(value);
        this.toggleDeleteBtn(value);
        this.toggleAdminBtn(value);
        return this.hideForwardBtn(value);
      };

      InboxHeaderView.prototype.toggleReplyBtn = function(value) {
        return this._toggleBtn(this.$replyBtn, value);
      };

      InboxHeaderView.prototype.toggleReplyAllBtn = function(value) {
        return this._toggleBtn(this.$replyAllBtn, value);
      };

      InboxHeaderView.prototype.toggleArchiveBtn = function(value) {
        return this._toggleBtn(this.$archiveBtn, value);
      };

      InboxHeaderView.prototype.toggleDeleteBtn = function(value) {
        return this._toggleBtn(this.$deleteBtn, value);
      };

      InboxHeaderView.prototype.toggleAdminBtn = function(value) {
        return this._toggleBtn(this.$adminBtn, value);
      };

      InboxHeaderView.prototype.hideMarkUnreadBtn = function(hide) {
        if (hide) {
          return this.$markUnreadBtn.parent().detach();
        } else {
          return this.$adminMenu.prepend(this.$markUnreadBtn.parent());
        }
      };

      InboxHeaderView.prototype.hideMarkReadBtn = function(hide) {
        if (hide) {
          return this.$markReadBtn.parent().detach();
        } else {
          return this.$adminMenu.prepend(this.$markReadBtn.parent());
        }
      };

      InboxHeaderView.prototype.hideForwardBtn = function(hide) {
        if (hide) {
          return this.$forwardBtn.parent().detach();
        } else {
          return this.$adminMenu.prepend(this.$forwardBtn.parent());
        }
      };

      InboxHeaderView.prototype.focusCompose = function() {
        return this.$composeBtn.focus();
      };

      InboxHeaderView.prototype._toggleBtn = function(btn, value) {
        value = typeof value === 'undefined' ? !btn.prop('disabled') : value;
        return btn.prop('disabled', value);
      };

      InboxHeaderView.prototype.toggleSending = function(shouldShow) {
        return this.$sendingMessage.toggle(shouldShow);
      };

      return InboxHeaderView;

    })(View);
  });

}).call(this);
