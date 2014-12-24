(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var ExternalFeed, _ref;

    return ExternalFeed = (function(_super) {
      __extends(ExternalFeed, _super);

      function ExternalFeed() {
        _ref = ExternalFeed.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalFeed.prototype.resourceName = 'external_feeds';

      return ExternalFeed;

    })(Backbone.Model);
  });

}).call(this);
