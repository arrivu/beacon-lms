(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone'], function(_, Backbone) {
    var WikiPageReloadView, pageReloadOptions, _ref;

    pageReloadOptions = ['reloadMessage', 'warning'];
    return WikiPageReloadView = (function(_super) {
      __extends(WikiPageReloadView, _super);

      function WikiPageReloadView() {
        _ref = WikiPageReloadView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageReloadView.prototype.setViewProperties = false;

      WikiPageReloadView.prototype.template = function() {
        return "<div class='alert alert-" + (this.options.warning ? 'warning' : 'info') + " reload-changed-page'>" + this.reloadMessage + "</div>";
      };

      WikiPageReloadView.prototype.defaults = {
        modelAttributes: ['title', 'url', 'body'],
        warning: false
      };

      WikiPageReloadView.prototype.events = {
        'click a.reload': 'reload'
      };

      WikiPageReloadView.prototype.initialize = function(options) {
        WikiPageReloadView.__super__.initialize.apply(this, arguments);
        return _.extend(this, _.pick(options || {}, pageReloadOptions));
      };

      WikiPageReloadView.prototype.pollForChanges = function() {
        var latestRevision, model, view;

        if (!this.model) {
          return;
        }
        view = this;
        model = this.model;
        latestRevision = this.latestRevision = model.latestRevision();
        if (latestRevision && !model.isNew()) {
          latestRevision.on('change:revision_id', function() {
            return latestRevision.fetch({
              data: {
                summary: false
              }
            }).done(function() {
              view.render();
              return view.trigger('changed');
            });
          });
          return latestRevision.pollForChanges();
        }
      };

      WikiPageReloadView.prototype.stopPolling = function() {
        var _ref1;

        return (_ref1 = this.latestRevision) != null ? _ref1.stopPolling() : void 0;
      };

      WikiPageReloadView.prototype.reload = function(ev) {
        if (ev != null) {
          ev.preventDefault();
        }
        this.model.set(_.pick(this.latestRevision.attributes, this.options.modelAttributes));
        return this.trigger('reload');
      };

      return WikiPageReloadView;

    })(Backbone.View);
  });

}).call(this);
