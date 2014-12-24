(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/PublishButtonView', 'underscore'], function(PublishButtonView, _) {
    var PublishIconView, _ref;

    return PublishIconView = (function(_super) {
      __extends(PublishIconView, _super);

      function PublishIconView() {
        _ref = PublishIconView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PublishIconView.prototype.publishClass = 'publish-icon-publish';

      PublishIconView.prototype.publishedClass = 'publish-icon-published';

      PublishIconView.prototype.unpublishClass = 'publish-icon-unpublish';

      PublishIconView.prototype.tagName = 'span';

      PublishIconView.prototype.className = 'publish-icon';

      PublishIconView.prototype.initialize = function() {
        return this.events = _.extend({}, PublishButtonView.prototype.events, this.events);
      };

      PublishIconView.prototype.events = {
        'keyclick': 'click'
      };

      return PublishIconView;

    })(PublishButtonView);
  });

}).call(this);
