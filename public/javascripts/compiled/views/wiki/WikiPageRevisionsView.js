(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/views/CollectionView', 'compiled/views/wiki/WikiPageRevisionView', 'jst/wiki/WikiPageRevisions', 'compiled/jquery/floatingSticky'], function($, _, Backbone, CollectionView, WikiPageRevisionView, template) {
    var WikiPageRevisionsView, _ref;

    return WikiPageRevisionsView = (function(_super) {
      __extends(WikiPageRevisionsView, _super);

      function WikiPageRevisionsView() {
        _ref = WikiPageRevisionsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageRevisionsView.prototype.className = 'show-revisions';

      WikiPageRevisionsView.prototype.template = template;

      WikiPageRevisionsView.prototype.itemView = WikiPageRevisionView;

      WikiPageRevisionsView.mixin({
        events: {
          'click .prev-button': 'prevPage',
          'click .next-button': 'nextPage',
          'click .close-button': 'close'
        },
        els: {
          '#ticker': '$ticker',
          'aside': '$aside',
          '.revisions-list': '$revisionsList'
        }
      });

      WikiPageRevisionsView.optionProperty('pages_path');

      WikiPageRevisionsView.prototype.initialize = function(options) {
        var _this = this;

        WikiPageRevisionsView.__super__.initialize.apply(this, arguments);
        this.selectedRevision = null;
        this.on('selectionChanged', function(newSelection, oldSelection) {
          var _ref1, _ref2;

          if ((_ref1 = oldSelection.model) != null) {
            _ref1.set('selected', false);
          }
          return (_ref2 = newSelection.model) != null ? _ref2.set('selected', true) : void 0;
        });
        return this.on('render renderItem', function() {
          return _this.reposition();
        });
      };

      WikiPageRevisionsView.prototype.afterRender = function() {
        WikiPageRevisionsView.__super__.afterRender.apply(this, arguments);
        $.publish('userContent/change');
        this.trigger('render');
        return this.floatingSticky = this.$aside.floatingSticky('#main', {
          top: '#content'
        });
      };

      WikiPageRevisionsView.prototype.remove = function() {
        if (this.floatingSticky) {
          _.each(this.floatingSticky, function(sticky) {
            return sticky.remove();
          });
          this.floatingSticky = null;
        }
        return WikiPageRevisionsView.__super__.remove.apply(this, arguments);
      };

      WikiPageRevisionsView.prototype.renderItem = function() {
        WikiPageRevisionsView.__super__.renderItem.apply(this, arguments);
        return this.trigger('renderItem');
      };

      WikiPageRevisionsView.prototype.attachItemView = function(model, view) {
        var selectModel,
          _this = this;

        if (!!this.selectedRevision && this.selectedRevision.get('revision_id') === model.get('revision_id')) {
          model.set(this.selectedRevision.attributes);
          model.set('selected', true);
          this.setSelectedModelAndView(model, view);
        } else {
          model.set('selected', false);
        }
        selectModel = function() {
          return _this.setSelectedModelAndView(model, view);
        };
        if (!this.selectedModel) {
          selectModel();
        }
        view.pages_path = this.pages_path;
        return view.$el.on('click', selectModel);
      };

      WikiPageRevisionsView.prototype.setSelectedModelAndView = function(model, view) {
        var oldSelectedModel, oldSelectedView;

        oldSelectedModel = this.selectedModel;
        oldSelectedView = this.selectedView;
        this.selectedModel = model;
        this.selectedView = view;
        this.selectedRevision = model;
        return this.trigger('selectionChanged', {
          model: model,
          view: view
        }, {
          model: oldSelectedModel,
          view: oldSelectedView
        });
      };

      WikiPageRevisionsView.prototype.reposition = function() {
        if (this.floatingSticky) {
          return _.each(this.floatingSticky, function(sticky) {
            return sticky.reposition();
          });
        }
      };

      WikiPageRevisionsView.prototype.prevPage = function(ev) {
        if (ev != null) {
          ev.preventDefault();
        }
        return this.$el.disableWhileLoading(this.collection.fetch({
          page: 'prev',
          reset: true
        }));
      };

      WikiPageRevisionsView.prototype.nextPage = function(ev) {
        if (ev != null) {
          ev.preventDefault();
        }
        return this.$el.disableWhileLoading(this.collection.fetch({
          page: 'next',
          reset: true
        }));
      };

      WikiPageRevisionsView.prototype.close = function(ev) {
        if (ev != null) {
          ev.preventDefault();
        }
        return window.location.href = this.collection.parentModel.get('html_url');
      };

      WikiPageRevisionsView.prototype.toJSON = function() {
        var json;

        json = WikiPageRevisionsView.__super__.toJSON.apply(this, arguments);
        json.CAN = {
          FETCH_PREV: this.collection.canFetch('prev'),
          FETCH_NEXT: this.collection.canFetch('next')
        };
        return json;
      };

      return WikiPageRevisionsView;

    })(CollectionView);
  });

}).call(this);
