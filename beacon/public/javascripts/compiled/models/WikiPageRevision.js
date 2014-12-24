(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'i18n!pages', 'compiled/backbone-ext/DefaultUrlMixin', 'compiled/str/splitAssetString', 'compiled/jquery.rails_flash_notifications'], function($, _, Backbone, I18n, DefaultUrlMixin, splitAssetString) {
    var WikiPageRevision, pageRevisionOptions, _ref;

    pageRevisionOptions = ['contextAssetString', 'page', 'pageUrl', 'latest', 'summary'];
    return WikiPageRevision = (function(_super) {
      __extends(WikiPageRevision, _super);

      function WikiPageRevision() {
        _ref = WikiPageRevision.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageRevision.mixin(DefaultUrlMixin);

      WikiPageRevision.prototype.initialize = function(attributes, options) {
        WikiPageRevision.__super__.initialize.apply(this, arguments);
        _.extend(this, _.pick(options || {}, pageRevisionOptions));
        if (_.has(this, 'url')) {
          return delete this.url;
        }
      };

      WikiPageRevision.prototype.urlRoot = function() {
        return "/api/v1/" + (this._contextPath()) + "/pages/" + this.pageUrl + "/revisions";
      };

      WikiPageRevision.prototype.url = function() {
        var base;

        base = this.urlRoot();
        if (this.latest) {
          return "" + base + "/latest";
        }
        if (this.get('revision_id')) {
          return "" + base + "/" + (this.get('revision_id'));
        }
        return base;
      };

      WikiPageRevision.prototype.fetch = function(options) {
        var _base, _ref1, _ref2;

        if (options == null) {
          options = {};
        }
        if (this.summary) {
          if ((_ref1 = options.data) == null) {
            options.data = {};
          }
          if ((_ref2 = (_base = options.data).summary) == null) {
            _base.summary = true;
          }
        }
        return WikiPageRevision.__super__.fetch.call(this, options);
      };

      WikiPageRevision.prototype.pollForChanges = function(interval) {
        var poll,
          _this = this;

        if (interval == null) {
          interval = 30000;
        }
        this.polling = true;
        if (!this._poller) {
          poll = function() {
            if (!_this.polling) {
              return;
            }
            return _this.fetch().done(function(data, status, xhr) {
              status = xhr.status.toString();
              if (!(status[0] === '4' || status[0] === '5')) {
                return poll();
              }
            });
          };
          this._poller = poll = _.throttle(poll, interval, {
            leading: false
          });
        }
        return this._poller();
      };

      WikiPageRevision.prototype.stopPolling = function() {
        return this.polling = false;
      };

      WikiPageRevision.prototype.parse = function(response, options) {
        if (response.url) {
          response.id = response.url;
        }
        return response;
      };

      WikiPageRevision.prototype.toJSON = function() {
        return _.omit(WikiPageRevision.__super__.toJSON.apply(this, arguments), 'id');
      };

      WikiPageRevision.prototype.restore = function() {
        var d;

        d = $.ajaxJSON(this.url(), 'POST').fail(function() {
          return $.flashError(I18n.t('restore_failed', 'Failed to restore page revision'));
        });
        $('#wiki_page_revisions').disableWhileLoading($.Deferred());
        return d;
      };

      return WikiPageRevision;

    })(Backbone.Model);
  });

}).call(this);
