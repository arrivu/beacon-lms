(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/CollectionView', 'jst/DiscussionTopics/discussionList', 'compiled/views/DiscussionTopics/DiscussionView', 'jqueryui/draggable', 'jqueryui/sortable'], function($, _, CollectionView, template, itemView) {
    var DiscussionListView, _ref;

    return DiscussionListView = (function(_super) {
      __extends(DiscussionListView, _super);

      function DiscussionListView() {
        this._onDrop = __bind(this._onDrop, this);
        this._updateSort = __bind(this._updateSort, this);
        this._onFetchedLast = __bind(this._onFetchedLast, this);
        this._toggleNoContentMessage = __bind(this._toggleNoContentMessage, this);
        this.renderItem = __bind(this.renderItem, this);        _ref = DiscussionListView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionListView.prototype.template = template;

      DiscussionListView.prototype.itemView = itemView;

      DiscussionListView.prototype.defaults = {
        showSpinner: true,
        showMessage: false,
        sortable: false
      };

      DiscussionListView.optionProperty('showSpinner');

      DiscussionListView.optionProperty('showMessage');

      DiscussionListView.optionProperty('title');

      DiscussionListView.optionProperty('listId');

      DiscussionListView.optionProperty('sortable');

      DiscussionListView.optionProperty('draggable');

      DiscussionListView.optionProperty('destination');

      DiscussionListView.prototype.spinnerOptions = {
        color: '#333',
        length: 5,
        radius: 6,
        width: 2
      };

      DiscussionListView.prototype.sortOptions = {
        tolerance: 'pointer'
      };

      DiscussionListView.prototype.dragOptions = {
        helper: 'clone',
        opacity: 0.75,
        revert: 'invalid',
        revertDuration: 0,
        zIndex: 100
      };

      DiscussionListView.prototype.dropOptions = {
        activeClass: 'droppable',
        hoverClass: 'droppable-hover',
        tolerance: 'pointer'
      };

      DiscussionListView.prototype.events = {
        'click .al-trigger': 'onAdminClick'
      };

      DiscussionListView.prototype.render = function() {
        DiscussionListView.__super__.render.apply(this, arguments);
        this._cacheElements();
        this._toggleNoContentMessage();
        if (this.options.sortable) {
          this._initSort();
        }
        if (!this.$el.data('view')) {
          this.$el.data('view', this);
        }
        if (this.options.showSpinner) {
          this._startLoader();
        } else {
          this._stopLoader();
        }
        return this;
      };

      DiscussionListView.prototype.renderItem = function(model) {
        DiscussionListView.__super__.renderItem.apply(this, arguments);
        if (this.options.draggable) {
          return this._initDrag(model.view);
        }
      };

      DiscussionListView.prototype.isEmpty = function() {
        return this.collection.isEmpty() || this.collection.all(function(m) {
          return m.get('hidden');
        });
      };

      DiscussionListView.prototype.toJSON = function() {
        return _.extend({}, ENV, this.options);
      };

      DiscussionListView.prototype.attachCollection = function() {
        this.collection.on('change:hidden', this._toggleNoContentMessage);
        this.collection.on('fetched:last', this._onFetchedLast);
        return DiscussionListView.__super__.attachCollection.apply(this, arguments);
      };

      DiscussionListView.prototype.onAdminClick = function(e) {
        return e.preventDefault();
      };

      DiscussionListView.prototype._startLoader = function() {
        var spinner;

        spinner = new Spinner(this.spinnerOptions);
        return spinner.spin(this.$loader.show()[0]);
      };

      DiscussionListView.prototype._stopLoader = function() {
        return this.$loader.empty().hide();
      };

      DiscussionListView.prototype._cacheElements = function() {
        this.$loader = this.$el.find('.loader');
        return this.$noContent = this.$el.find('.no-content');
      };

      DiscussionListView.prototype._toggleNoContentMessage = function() {
        if (this.options.showMessage) {
          return this.$noContent.toggle(this.isEmpty());
        }
      };

      DiscussionListView.prototype._onFetchedLast = function() {
        this.options.showSpinner = false;
        this.options.showMessage = true;
        this._stopLoader();
        this._toggleNoContentMessage();
        return this.collection.reset(this.collection.models);
      };

      DiscussionListView.prototype._initSort = function() {
        if (!ENV.permissions.moderate) {
          return;
        }
        this.$list.sortable(_.extend({}, this.sortOptions));
        this.$list.on('sortupdate', this._updateSort);
        return $(this.options.destination).droppable(_.extend({}, this.dropOptions)).on('drop', this._onDrop);
      };

      DiscussionListView.prototype._updateSort = function(e, ui) {
        var model, pos,
          _this = this;

        model = this.collection.get(ui.item.data('id'));
        if (!(model != null ? model.get('pinned') : void 0)) {
          return;
        }
        pos = ui.item.index();
        this.collection.remove(model);
        this.collection.add(model, {
          at: pos
        });
        this.collection.reorder();
        model.set('preventClick', true);
        return setTimeout(function() {
          return model.set('preventClick', false);
        }, 0);
      };

      DiscussionListView.prototype._initDrag = function(view) {
        if (!this.options.destination) {
          throw new Error('must have destination');
        }
        if (!ENV.permissions.moderate) {
          return;
        }
        view.$el.draggable(_.extend({}, this.dragOptions));
        return $(this.options.destination).droppable(_.extend({}, this.dropOptions)).on('drop', this._onDrop);
      };

      DiscussionListView.prototype._onDrop = function(e, ui) {
        var currentGroup, locked, model, newGroup, pinned, _ref1;

        model = this.collection.get(ui.draggable.data('id'));
        if (!model) {
          return;
        }
        _ref1 = [$(e.currentTarget).data('view'), this], newGroup = _ref1[0], currentGroup = _ref1[1];
        pinned = !!newGroup.options.pinned;
        if (pinned && !this.options.pinnable) {
          return;
        }
        locked = !!newGroup.options.locked;
        if (locked && !model.get('can_lock')) {
          return;
        }
        return model.updateBucket({
          pinned: pinned,
          locked: locked
        });
      };

      return DiscussionListView;

    })(CollectionView);
  });

}).call(this);
