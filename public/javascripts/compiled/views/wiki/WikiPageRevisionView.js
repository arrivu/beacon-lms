(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'jst/wiki/WikiPageRevision'], function($, _, Backbone, template) {
    var WikiPageRevisionView, _ref;

    return WikiPageRevisionView = (function(_super) {
      __extends(WikiPageRevisionView, _super);

      function WikiPageRevisionView() {
        _ref = WikiPageRevisionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageRevisionView.prototype.tagName = 'li';

      WikiPageRevisionView.prototype.className = 'revision clearfix';

      WikiPageRevisionView.prototype.template = template;

      WikiPageRevisionView.prototype.events = {
        'click .restore-link': 'restore'
      };

      WikiPageRevisionView.prototype.initialize = function() {
        var _this = this;

        WikiPageRevisionView.__super__.initialize.apply(this, arguments);
        return this.model.on('change', function() {
          return _this.render();
        });
      };

      WikiPageRevisionView.prototype.afterRender = function() {
        WikiPageRevisionView.__super__.afterRender.apply(this, arguments);
        this.$el.toggleClass('selected', !!this.model.get('selected'));
        return this.$el.toggleClass('latest', !!this.model.get('latest'));
      };

      WikiPageRevisionView.prototype.toJSON = function() {
        var json, latest, _ref1, _ref2;

        latest = (_ref1 = this.model.collection) != null ? _ref1.latest : void 0;
        json = _.extend({}, WikiPageRevisionView.__super__.toJSON.apply(this, arguments), {
          IS: {
            LATEST: !!this.model.get('latest'),
            SELECTED: !!this.model.get('selected'),
            LOADED: !!this.model.get('title') && !!this.model.get('body')
          }
        });
        json.IS.SAME_AS_LATEST = json.IS.LOADED && (this.model.get('title') === (latest != null ? latest.get('title') : void 0)) && (this.model.get('body') === (latest != null ? latest.get('body') : void 0));
        json.updated_at = $.datetimeString(json.updated_at);
        json.edited_by = (_ref2 = json.edited_by) != null ? _ref2.display_name : void 0;
        return json;
      };

      WikiPageRevisionView.prototype.restore = function(ev) {
        var _this = this;

        if (ev != null) {
          ev.preventDefault();
        }
        return this.model.restore().done(function(attrs) {
          if (_this.pages_path) {
            return window.location.href = "" + _this.pages_path + "/" + attrs.url + "/revisions";
          } else {
            return window.location.reload();
          }
        });
      };

      return WikiPageRevisionView;

    })(Backbone.View);
  });

}).call(this);
