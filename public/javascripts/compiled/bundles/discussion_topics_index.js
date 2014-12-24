(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['i18n!discussions', 'underscore', 'Backbone', 'compiled/collections/DiscussionTopicsCollection', 'compiled/views/DiscussionTopics/DiscussionListView', 'compiled/views/DiscussionTopics/IndexView'], function(I18n, _, _arg, DiscussionTopicsCollection, DiscussionListView, IndexView) {
    var DiscussionIndexRouter, Router, _ref;

    Router = _arg.Router;
    DiscussionIndexRouter = (function(_super) {
      __extends(DiscussionIndexRouter, _super);

      function DiscussionIndexRouter() {
        this.moveModel = __bind(this.moveModel, this);
        this._onPipelineEnd = __bind(this._onPipelineEnd, this);
        this._onPipelineLoad = __bind(this._onPipelineLoad, this);        _ref = DiscussionIndexRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionIndexRouter.prototype.messages = {
        lists: {
          open: I18n.t('discussions', 'Discussions'),
          locked: I18n.t('closed_for_comments', 'Closed for Comments'),
          pinned: I18n.t('pinned_discussions', 'Pinned Discussions')
        },
        help: {
          title: I18n.t('ordered_by_recent_activity', 'Ordered by Recent Activity')
        },
        toggleMessage: I18n.t('toggle_message', 'toggle section visibility')
      };

      DiscussionIndexRouter.prototype.routes = {
        '': 'index'
      };

      DiscussionIndexRouter.prototype.initialize = function() {
        return this.discussions = {
          open: this._createListView('open', {
            comparator: 'dateComparator',
            draggable: true,
            destination: '.pinned.discussion-list, .locked.discussion-list'
          }),
          locked: this._createListView('locked', {
            comparator: 'dateComparator',
            destination: '.pinned.discussion-list, .open.discussion-list',
            draggable: true,
            locked: true
          }),
          pinned: this._createListView('pinned', {
            comparator: 'positionComparator',
            destination: '.open.discussion-list, .locked.discussion-list',
            sortable: true,
            pinned: true
          })
        };
      };

      DiscussionIndexRouter.prototype.index = function() {
        this.view = new IndexView({
          openDiscussionView: this.discussions.open,
          lockedDiscussionView: this.discussions.locked,
          pinnedDiscussionView: this.discussions.pinned,
          permissions: ENV.permissions,
          atom_feed_url: ENV.atom_feed_url
        });
        this._attachCollections();
        this.fetchDiscussions();
        return this.view.render();
      };

      DiscussionIndexRouter.prototype.fetchDiscussions = function() {
        var pipeline;

        pipeline = new DiscussionTopicsCollection;
        pipeline.fetch({
          data: {
            order_by: 'recent_activity',
            per_page: 50
          }
        });
        pipeline.on('fetch', this._onPipelineLoad);
        return pipeline.on('fetched:last', this._onPipelineEnd);
      };

      DiscussionIndexRouter.prototype._createListView = function(type, options) {
        var comparator;

        if (options == null) {
          options = {};
        }
        comparator = DiscussionTopicsCollection[options.comparator];
        delete options.comparator;
        return new DiscussionListView({
          collection: new DiscussionTopicsCollection([], {
            comparator: comparator
          }),
          className: type,
          destination: options.destination,
          draggable: !!options.draggable,
          itemViewOptions: _.extend(options, {
            pinnable: ENV.permissions.moderate
          }),
          listID: "" + type + "-discussions",
          locked: !!options.locked,
          pinnable: ENV.permissions.moderate,
          pinned: !!options.pinned,
          sortable: !!options.sortable,
          title: this.messages.lists[type],
          titleHelp: (_.include(['open', 'locked'], type) ? this.messages.help.title : null),
          toggleMessage: this.messages.toggleMessage
        });
      };

      DiscussionIndexRouter.prototype._attachCollections = function() {
        var key, view, _ref1, _results;

        _ref1 = this.discussions;
        _results = [];
        for (key in _ref1) {
          view = _ref1[key];
          _results.push(view.collection.on('change:locked change:pinned', this.moveModel));
        }
        return _results;
      };

      DiscussionIndexRouter.prototype._onPipelineLoad = function(collection, models) {
        this._sortCollection(models);
        if (collection.urls.next) {
          return setTimeout((function() {
            return collection.fetch({
              page: 'next'
            });
          }), 0);
        }
      };

      DiscussionIndexRouter.prototype._onPipelineEnd = function() {
        var key, view, _ref1;

        _ref1 = this.discussions;
        for (key in _ref1) {
          view = _ref1[key];
          view.collection.trigger('fetched:last');
        }
        if (!(this.discussions.pinned.collection.length || ENV.permissions.moderate)) {
          this.discussions.pinned.$el.remove();
        }
        if (this.discussions.pinned.collection.length && !this.discussions.open.collection.length && !ENV.permissions.moderate) {
          return this.discussions.open.$el.remove();
        }
      };

      DiscussionIndexRouter.prototype._sortCollection = function(pipeline) {
        var group, key, _results;

        group = this._groupModels(pipeline);
        _results = [];
        for (key in group) {
          _results.push(this.discussions[key].collection.add(group[key], {
            silent: true
          }));
        }
        return _results;
      };

      DiscussionIndexRouter.prototype._groupModels = function(pipeline) {
        var defaults;

        defaults = {
          pinned: [],
          locked: [],
          open: []
        };
        return _.extend(defaults, _.groupBy(pipeline, this._modelBucket));
      };

      DiscussionIndexRouter.prototype._modelBucket = function(model) {
        if (model.attributes) {
          if (model.get('pinned')) {
            return 'pinned';
          }
          if (model.get('locked') || (model.get('locked_for_user') && (model.get('lock_info')['unlock_at'] == null))) {
            return 'locked';
          }
        } else {
          if (model.pinned) {
            return 'pinned';
          }
          if (model.locked || (model.locked_for_user && (model.lock_info['unlock_at'] == null))) {
            return 'locked';
          }
        }
        return 'open';
      };

      DiscussionIndexRouter.prototype.moveModel = function(model) {
        var bucket;

        bucket = this.discussions[this._modelBucket(model)].collection;
        if (bucket === model.collection) {
          return;
        }
        model.collection.remove(model);
        return bucket.add(model);
      };

      return DiscussionIndexRouter;

    })(Router);
    this.router = new DiscussionIndexRouter;
    return Backbone.history.start();
  });

}).call(this);
